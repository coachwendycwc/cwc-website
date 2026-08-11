#!/usr/bin/env bash
# Deploy the CWC website to staging or production.
#
#   ./scripts/deploy.sh staging
#   ./scripts/deploy.sh prod
#
# Why this exists instead of a bare `aws s3 sync`: the capabilities
# statement files are served with Cache-Control: no-cache so browsers
# never show stale copies (see SCRATCHPAD 2026-08-10). A plain sync
# re-uploads them without that header, silently reintroducing the
# stale-page problem. This script re-applies the header after every sync.
set -euo pipefail
cd "$(dirname "$0")/.."

case "${1:-}" in
  staging)
    BUCKET="staging.coachingwomenofcolor.com"
    DIST="E39U9T07BP67U4"
    ;;
  prod)
    BUCKET="coachingwomenofcolor.com"
    DIST="E2RMMPGLN2DEIG"
    ;;
  *)
    echo "usage: $0 staging|prod" >&2
    exit 1
    ;;
esac

npm run build

aws s3 sync out/ "s3://$BUCKET/" --delete

# Files that must always revalidate in the browser. Add here anything
# that gets shared as a direct link and edited in place.
NO_CACHE_HTML=(cwc-capabilities-statement.html cwc-capabilities-statement-v2.html)
NO_CACHE_PDF=(cwc-capabilities-statement.pdf cwc-capabilities-statement-v2.pdf)

for f in "${NO_CACHE_HTML[@]}"; do
  aws s3 cp "out/$f" "s3://$BUCKET/$f" --cache-control no-cache --content-type text/html
done
for f in "${NO_CACHE_PDF[@]}"; do
  aws s3 cp "out/$f" "s3://$BUCKET/$f" --cache-control no-cache --content-type application/pdf
done

aws cloudfront create-invalidation --distribution-id "$DIST" --paths "/*" \
  --query "Invalidation.{Id:Id,Status:Status}" --output text

echo "Deployed to $BUCKET and invalidated $DIST."
