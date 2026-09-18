import { Header, Footer } from "@/components";
import type { Metadata } from "next";

// One link, used in both places. Free 30-minute discovery call, booked on Motion.
const DISCOVERY_CALL_URL = "https://app.usemotion.com/meet/wendy-perdomo/individuals";

export const metadata: Metadata = {
  title: "Start With a Conversation | Individual Coaching",
  description:
    "A complimentary 30-minute discovery call with Wendy Perdomo. Bring one real situation you are carrying and leave with a clear view of what is going on, an honest read, and a recommendation you can act on.",
  alternates: {
    canonical: "https://coachingwomenofcolor.com/for-individuals/",
  },
};

export default function ForIndividualsPage() {
  return (
    <>
      <Header />

      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Karla:wght@400;500;600;700&display=swap"
      />
      <style>{`
.swc{
  --ground:#FBF9FC; --surface:#FFFFFF; --band:#F4F0F8;
  --tink:#221A33; --ink-2:#4B4162; --tmuted:#6E6584; --trule:#E5DFEE;
  --tpurple:#3E2A66; --purple-deep:#2E1F4D; --tgold:#C08A00; --gold-bright:#F0C000; --tmagenta:#C2126F;
  background:var(--ground); color:var(--tink);
  font-family:Karla,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
  font-size:17px; line-height:1.6;
  padding:118px 0 84px;
}
.swc *{box-sizing:border-box;}
.swc .wrap{max-width:820px;margin:0 auto;padding:0 24px;}
.swc header{padding:24px 0 32px;}
.swc .kicker{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--tmagenta);font-weight:700;margin:0 0 18px;}
.swc h1{font-family:Fraunces,Georgia,serif;font-optical-sizing:auto;font-weight:600;font-size:clamp(36px,6.5vw,58px);line-height:1.03;letter-spacing:-.025em;margin:0 0 20px;color:var(--tpurple);text-wrap:balance;}
.swc .standfirst{font-size:20px;line-height:1.55;color:var(--ink-2);max-width:56ch;margin:0 0 28px;}
.swc .standfirst b{color:var(--tink);font-weight:600;}
.swc .cta{display:inline-block;background:var(--tmagenta);color:#fff;text-decoration:none;font-weight:700;font-size:16.5px;letter-spacing:.01em;padding:15px 30px;border-radius:3px;border:2px solid var(--tmagenta);transition:background .15s ease,color .15s ease;}
.swc .cta:hover,.swc .cta:focus-visible{background:transparent;color:var(--tmagenta);}
.swc .cta:focus-visible{outline:3px solid var(--gold-bright);outline-offset:3px;}
.swc .ctanote{display:block;font-size:14px;color:var(--tmuted);margin-top:12px;}
.swc section{padding:44px 0 0;border-top:1px solid var(--trule);margin-top:44px;}
.swc section:first-of-type{border-top:none;margin-top:0;}
.swc h2{font-family:Fraunces,Georgia,serif;font-weight:600;font-size:29px;margin:0 0 14px;color:var(--tpurple);letter-spacing:-.015em;text-wrap:balance;}
.swc h3{font-size:17.5px;font-weight:700;color:var(--tink);margin:0 0 6px;}
.swc p{margin:0 0 16px;color:var(--ink-2);max-width:62ch;}
.swc p b{color:var(--tink);font-weight:600;}
.swc p:last-child{margin-bottom:0;}
.swc .callcard{background:var(--purple-deep);color:#fff;border-radius:5px;padding:32px 34px;margin:6px 0 24px;}
.swc .callcard .meta{display:flex;gap:28px;flex-wrap:wrap;margin:0 0 20px;padding:0 0 20px;border-bottom:1px solid rgba(255,255,255,.18);}
.swc .callcard .m .lab{font-size:11px;letter-spacing:.13em;text-transform:uppercase;color:#B9A8DE;font-weight:700;margin-bottom:4px;}
.swc .callcard .m .val{font-family:Fraunces,Georgia,serif;font-size:22px;font-weight:600;color:var(--gold-bright);}
.swc .callcard p{color:#E4DCF2;max-width:60ch;}
.swc .callcard p b{color:#fff;}
.swc .beats{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:22px;margin-top:20px;}
.swc .beat{border-top:3px solid var(--gold-bright);padding-top:14px;}
.swc .beat h3{font-family:Fraunces,Georgia,serif;font-weight:600;font-size:18px;color:var(--tpurple);margin-bottom:7px;}
.swc .beat p{font-size:15.5px;color:var(--ink-2);margin:0;}
.swc .quotes{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:18px;margin-top:22px;}
.swc .q{background:var(--surface);border:1px solid var(--trule);border-radius:4px;padding:20px 22px;}
.swc .q p.said{font-family:Fraunces,Georgia,serif;font-size:18px;line-height:1.35;color:var(--tpurple);font-style:italic;margin:0 0 10px;}
.swc .q p.then{font-size:14.5px;color:var(--tmuted);margin:0;}
.swc .eng{background:var(--surface);border:1px solid var(--trule);border-left:4px solid var(--gold-bright);border-radius:0 4px 4px 0;padding:20px 24px;margin-bottom:12px;}
.swc .eng .ehead{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;margin-bottom:5px;}
.swc .eng h3{margin:0;}
.swc .eng .dur{font-size:13px;letter-spacing:.09em;text-transform:uppercase;font-weight:700;color:var(--tgold);}
.swc .eng p{font-size:15.5px;margin:0;}
.swc .aside{background:var(--band);border-left:3px solid var(--tmagenta);border-radius:0 4px 4px 0;padding:20px 24px;margin-top:20px;}
.swc .aside p{font-size:16px;margin:0;}
.swc .aside p b{color:var(--tpurple);}
.swc ul.fine{margin:16px 0 0;padding-left:20px;color:var(--ink-2);font-size:15.5px;}
.swc ul.fine li{margin-bottom:9px;max-width:62ch;}
.swc .closing{background:var(--band);border-radius:5px;padding:36px 34px;margin-top:44px;text-align:center;}
.swc .closing h2{margin-bottom:12px;}
.swc .closing p{max-width:48ch;margin:0 auto 22px;}
@media (max-width:640px){
  .swc .callcard{padding:26px 22px;}
  .swc .closing{padding:30px 22px;}
}
@media (prefers-reduced-motion:reduce){.swc *{transition:none!important;}}
      `}</style>

      <main id="main-content" className="swc">
        <div className="wrap">
          <header>
            <p className="kicker">Coaching Women of Color&reg;</p>
            <h1>Start with a conversation.</h1>
            <p className="standfirst">
              Thirty minutes. Bring one real situation you are carrying, and leave with a clear
              view of what is actually going on and what to do about it.{" "}
              <b>You will get my honest read, and a recommendation you can act on.</b>
            </p>
            <a
              className="cta"
              href={DISCOVERY_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book your discovery call
            </a>
            <span className="ctanote">30 minutes &middot; virtual via Zoom</span>
          </header>

          <section>
            <h2>The discovery call</h2>
            <div className="callcard">
              <div className="meta">
                <div className="m">
                  <div className="lab">Length</div>
                  <div className="val">30 minutes</div>
                </div>
                <div className="m">
                  <div className="lab">Cost</div>
                  <div className="val">Complimentary</div>
                </div>
                <div className="m">
                  <div className="lab">Where</div>
                  <div className="val">Zoom</div>
                </div>
              </div>
              <p>
                Thirty minutes on you. What you are carrying, what you want to be different, and
                what it would actually take to get there.
              </p>
              <p>
                <b>You will leave with my recommendation and the reasoning behind it.</b> Some
                women know in the room. Others want to sit with it first. Either way, when you are
                ready, we put the work in writing and begin.
              </p>
            </div>
            <p>
              A short questionnaire goes out when you book. It takes about three minutes, and it
              means we start with substance instead of spending the first ten minutes on
              background.
            </p>
          </section>

          <section>
            <h2>What to bring, and what you leave with</h2>
            <div className="beats">
              <div className="beat">
                <h3>Bring one real thing</h3>
                <p>
                  Just one. Something you are navigating right now, and what you want to be
                  different about it.
                </p>
              </div>
              <div className="beat">
                <h3>We look at it together</h3>
                <p>
                  Where you are, what is genuinely in the way, and what kind of support would move
                  it.
                </p>
              </div>
              <div className="beat">
                <h3>You leave with a direction</h3>
                <p>
                  Which engagement fits what you are trying to change, why that one, and what the
                  first month would look like.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2>Sounds like you?</h2>
            <p>
              If any of these is close to something you have said out loud, or only to yourself,
              bring it to the call.
            </p>
            <div className="quotes">
              <div className="q">
                <p className="said">
                  &ldquo;I keep getting told I am doing great, and I keep getting passed
                  over.&rdquo;
                </p>
                <p className="then">Visibility, advancement, being overlooked</p>
              </div>
              <div className="q">
                <p className="said">
                  &ldquo;I just got the team. I have never managed anyone before.&rdquo;
                </p>
                <p className="then">New to leading, and learning it in real time</p>
              </div>
              <div className="q">
                <p className="said">
                  &ldquo;I am ready for the promotion. I just have not had the
                  conversation.&rdquo;
                </p>
                <p className="then">Making the ask, and making the case</p>
              </div>
              <div className="q">
                <p className="said">
                  &ldquo;I have a team member who is struggling, and I am out of ideas.&rdquo;
                </p>
                <p className="then">Supporting someone on your team &mdash; often employer-sponsored</p>
              </div>
              <div className="q">
                <p className="said">
                  &ldquo;Something is off in this role and I cannot quite name what.&rdquo;
                </p>
                <p className="then">A difficult dynamic, or a decision about what is next</p>
              </div>
              <div className="q">
                <p className="said">
                  &ldquo;I am waiting to feel ready, and I have been waiting a while.&rdquo;
                </p>
                <p className="then">Confidence, self-doubt, impostor patterns</p>
              </div>
            </div>
          </section>

          <section>
            <h2>If we work together</h2>
            <p>
              Each engagement is a different depth of work. Most are for you and your own
              leadership. One of them &mdash; Performance-Based Transformation &mdash; is what you
              bring when the person who needs support is on your team. We choose the one that
              matches what you are actually trying to change, and we talk through the investment
              on our call.
            </p>

            <div className="eng">
              <div className="ehead">
                <h3>Foundation</h3>
                <span className="dur">1 month</span>
              </div>
              <p>
                Where the work gets set up. A leadership assessment, a development plan built
                around your goals, and the sessions to put them into motion. This is groundwork
                you establish once and keep.
              </p>
            </div>

            <div className="eng">
              <div className="ehead">
                <h3>Momentum</h3>
                <span className="dur">3 months</span>
              </div>
              <p>
                For a leader who already knows what she wants and needs the accountability to get
                there. Habit building, execution support, and structure between sessions.
              </p>
            </div>

            <div className="eng">
              <div className="ehead">
                <h3>Transformation</h3>
                <span className="dur">4 months</span>
              </div>
              <p>
                Deep individual leadership development across a sustained arc, including a full
                Everything DiSC&reg; assessment, a leadership roadmap, and a follow-up session
                thirty days after we close. This one is yours alone &mdash; entirely private to
                you.
              </p>
            </div>

            <div className="eng">
              <div className="ehead">
                <h3>Performance-Based Transformation</h3>
                <span className="dur">4 months</span>
              </div>
              <p>
                For when you are the manager. Someone on your team is struggling, you have tried
                what you know, and you want them supported properly rather than managed out.
                Delivered through The RESET Method&reg;: it begins with <b>you</b>, to understand
                what is actually happening, then works directly with your team member. You stay
                involved at three defined points and receive a report at the close. Session content
                stays confidential; what comes back to you is progress against the outcomes we set
                together. Usually employer-sponsored.
              </p>
            </div>

            <div className="eng">
              <div className="ehead">
                <h3>The Executive Alliance</h3>
                <span className="dur">6 months minimum</span>
              </div>
              <p>
                A dedicated advisory relationship rather than a set number of sessions.
                Twice-monthly coaching plus weekly syncs, same-day response, crisis support, and
                on-site availability. What you are retaining is access.
              </p>
            </div>

            <div className="aside">
              <p>
                <b>Imposter syndrome coaching</b> is available on its own as a focused four-session
                Intensive, or woven alongside any engagement. The first session finds the pattern,
                where it shows up, and what sets it off. And where what you are describing turns
                out to be an accurate read of your environment, I will name that plainly and point
                you toward the support that fits it. You deserve the truth about which one it is.
              </p>
            </div>
          </section>

          <section>
            <h2>Good to know</h2>
            <ul className="fine">
              <li>All sessions are virtual via Zoom and strictly confidential.</li>
              <li>
                The discovery call is complimentary, carries no obligation, and is offered once
                per client.
              </li>
              <li>Every engagement begins with a written coaching agreement.</li>
              <li>Payment plans are available on every engagement.</li>
              <li>Employer sponsorship is available for any engagement and required for none.</li>
              <li>Timeframes shown are typical. Your cadence is agreed at the start.</li>
              <li>Rescheduling requires 24 hours notice.</li>
            </ul>
          </section>

          <div className="closing">
            <h2>One conversation is enough to know.</h2>
            <p>Thirty minutes. Bring one real thing. Leave with a direction.</p>
            <a
              className="cta"
              href={DISCOVERY_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book your discovery call
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
