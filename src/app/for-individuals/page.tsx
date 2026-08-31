import { Header, Footer } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Three Ways to Begin | Individual Coaching",
  description:
    "Your first conversation with me is real coaching, not a sales call. Three entry sessions — the Strategy Call, the Clarity Call, and the Breakthrough Session. You leave with a next step, a direction, or a plan.",
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
.twb{
  --ground:#FBF9FC; --surface:#FFFFFF; --band:#F4F0F8;
  --tink:#221A33; --ink-2:#4B4162; --tmuted:#6E6584; --trule:#E5DFEE;
  --tpurple:#3E2A66; --tgold:#C08A00; --gold-bright:#F0C000; --tmagenta:#C2126F;
  background:var(--ground); color:var(--tink);
  font-family:Karla,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
  font-size:17px; line-height:1.62;
  padding:118px 0 84px;
}
.twb *{box-sizing:border-box;}
.twb .wrap{max-width:1000px;margin:0 auto;padding:0 24px;}
.twb .hero{padding:24px 0 8px;}
.twb .eyebrow{font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--tmagenta);font-weight:700;margin:0 0 22px;}
.twb h1{font-family:Fraunces,Georgia,serif;font-optical-sizing:auto;font-weight:600;font-size:clamp(40px,7vw,68px);line-height:1.02;letter-spacing:-.02em;margin:0 0 22px;color:var(--tpurple);text-wrap:balance;}
.twb .standfirst{font-size:20px;line-height:1.55;color:var(--ink-2);max-width:44ch;margin:0;}
.twb .standfirst b{color:var(--tink);font-weight:600;}
.twb .rule{height:4px;background:var(--gold-bright);width:74px;margin:34px 0 0;border-radius:2px;}
.twb .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin:44px 0 0;}
.twb .card{background:var(--surface);border:1px solid var(--trule);border-radius:4px;padding:26px 24px 24px;display:flex;flex-direction:column;border-top:4px solid var(--tpurple);}
.twb .card .dur{font-size:11.5px;letter-spacing:.13em;text-transform:uppercase;color:var(--tmuted);font-weight:700;margin-bottom:10px;}
.twb .card h2{font-family:Fraunces,Georgia,serif;font-weight:600;font-size:25px;line-height:1.12;margin:0 0 6px;color:var(--tink);letter-spacing:-.01em;}
.twb .price{font-family:Fraunces,Georgia,serif;font-size:31px;font-weight:600;color:var(--tgold);line-height:1;margin:0 0 18px;}
.twb .forwhen{font-size:15.5px;line-height:1.5;color:var(--ink-2);margin:0 0 18px;}
.twb .leave{border-top:1px solid var(--trule);padding-top:15px;margin-top:auto;font-size:14.5px;line-height:1.5;color:var(--ink-2);}
.twb .leave span{display:block;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--tmagenta);font-weight:700;margin-bottom:7px;}
.twb .btn{display:block;text-align:center;margin-top:20px;background:var(--tmagenta);color:#fff;text-decoration:none;font-weight:700;font-size:15px;padding:13px 16px;border-radius:3px;transition:opacity .15s ease;}
.twb .btn:hover{opacity:.87;}
.twb .btn:focus-visible{outline:3px solid var(--gold-bright);outline-offset:2px;}
.twb .pick{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(5,auto);grid-auto-flow:column;border-top:2px solid var(--tpurple);background:var(--surface);border-left:1px solid var(--trule);border-right:1px solid var(--trule);border-bottom:1px solid var(--trule);border-radius:0 0 4px 4px;}
.twb .pcell{padding:16px 20px;border-bottom:1px solid var(--trule);}
.twb .pcell:nth-child(5n){border-bottom:0;}
.twb .phead{font-family:Fraunces,Georgia,serif;font-weight:600;font-size:19px;color:var(--tpurple);line-height:1.2;background:var(--band);}
.twb .phead em{display:block;font-style:normal;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--tmuted);font-weight:700;margin-top:5px;font-family:Karla,sans-serif;}
.twb .plab{display:block;font-size:10.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--tmagenta);font-weight:700;margin-bottom:6px;}
.twb .pcell p{margin:0;font-size:15px;line-height:1.5;color:var(--ink-2);}
.twb .pcell p.q{font-style:italic;color:var(--tink);}
.twb section{padding:64px 0 0;}
.twb h3.sect{font-family:Fraunces,Georgia,serif;font-weight:600;font-size:30px;margin:0 0 10px;color:var(--tpurple);letter-spacing:-.01em;text-wrap:balance;}
.twb .dek{color:var(--tmuted);margin:0 0 30px;max-width:56ch;font-size:17px;}
.twb .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
.twb .step .n{font-family:Fraunces,Georgia,serif;font-size:15px;font-weight:700;color:#fff;background:var(--tpurple);width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:13px;}
.twb .step h4{font-size:16.5px;margin:0 0 6px;font-weight:700;color:var(--tink);}
.twb .step p{margin:0;font-size:15.5px;line-height:1.55;color:var(--ink-2);}
.twb .after{background:var(--tpurple);color:#fff;border-radius:4px;padding:38px 40px;margin-top:22px;}
.twb .after h3{font-family:Fraunces,Georgia,serif;font-weight:600;font-size:27px;margin:0 0 12px;color:#fff;letter-spacing:-.01em;}
.twb .after p{margin:0;font-size:17px;line-height:1.6;color:#E4DCF2;max-width:62ch;}
.twb .after b{color:var(--gold-bright);font-weight:600;}
.twb .fine{margin-top:22px;background:var(--band);border-radius:4px;padding:26px 30px;}
.twb .fine ul{margin:0;padding:0;list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:11px 30px;}
.twb .fine li{font-size:14.5px;line-height:1.45;color:var(--ink-2);padding-left:17px;position:relative;}
.twb .fine li::before{content:"";position:absolute;left:0;top:.62em;width:7px;height:7px;border-radius:50%;background:var(--gold-bright);}
@media (max-width:860px){
  .twb .cards,.twb .steps{grid-template-columns:1fr;}
  .twb .pick{grid-template-columns:1fr;grid-template-rows:none;grid-auto-flow:row;}
  .twb .pcell:nth-child(5n){border-bottom:1px solid var(--trule);}
  .twb .pcell:last-child{border-bottom:0;}
  .twb .fine ul{grid-template-columns:1fr;}
  .twb .after{padding:30px 26px;}
}
@media (prefers-reduced-motion:reduce){.twb *{transition:none!important;}}
      `}</style>

      <main id="main-content" className="twb">
        <div className="wrap">
          <div className="hero">
            <p className="eyebrow">Coaching Women of Color&reg;</p>
            <h1>Three ways to begin</h1>
            <p className="standfirst">
              Your first conversation with me is <b>real coaching, not a sales call.</b> Bring
              something real. You&rsquo;ll leave with a next step, a direction, or a plan.
            </p>
            <div className="rule"></div>
          </div>

          <div className="cards" id="programs">
            <div className="card">
              <div className="dur">30 Minutes</div>
              <h2>The Strategy Call</h2>
              <div className="price">$150</div>
              <p className="forwhen">
                For when you have one specific challenge in front of you and need a clear next move.
              </p>
              <div className="leave">
                <span>You leave with</span>
                One to two concrete next steps on that one challenge.
              </div>
              <a className="btn" href="#">Book the Strategy Call</a>
            </div>

            <div className="card">
              <div className="dur">60 Minutes</div>
              <h2>The Clarity Call</h2>
              <div className="price">$300</div>
              <p className="forwhen">
                For a leadership challenge, decision, or opportunity that needs to come into focus.
              </p>
              <div className="leave">
                <span>You leave with</span>
                Clear direction and actionable next steps you can act on this week.
              </div>
              <a className="btn" href="#">Book the Clarity Call</a>
            </div>

            <div className="card">
              <div className="dur">90 Minutes</div>
              <h2>The Breakthrough Session</h2>
              <div className="price">$450</div>
              <p className="forwhen">
                For a complex, acute, or high-stakes situation where the next move really matters.
              </p>
              <div className="leave">
                <span>You leave with</span>
                An action plan and a decision-making framework for the situation you&rsquo;re in.
              </div>
              <a className="btn" href="#">Book the Breakthrough Session</a>
            </div>
          </div>

          <section>
            <h3 className="sect">Not sure which one?</h3>
            <p className="dek">
              The difference isn&rsquo;t the length of the call. It&rsquo;s what you&rsquo;re
              walking in with &mdash; and how much of the thinking is already done.
            </p>
            <div className="pick">
              <div className="pcell phead">The Strategy Call<em>30 min &middot; $150</em></div>
              <div className="pcell"><span className="plab">Sounds like</span><p className="q">&ldquo;I know what I need to do. I just can&rsquo;t figure out how to start.&rdquo;</p></div>
              <div className="pcell"><span className="plab">You&rsquo;re bringing</span><p>One specific challenge you&rsquo;ve already named.</p></div>
              <div className="pcell"><span className="plab">We spend it</span><p>Sharpening the challenge and deciding your move.</p></div>
              <div className="pcell"><span className="plab">You leave with</span><p>One to two concrete next steps.</p></div>

              <div className="pcell phead">The Clarity Call<em>60 min &middot; $300</em></div>
              <div className="pcell"><span className="plab">Sounds like</span><p className="q">&ldquo;Something isn&rsquo;t working and I can&rsquo;t quite name it.&rdquo;</p></div>
              <div className="pcell"><span className="plab">You&rsquo;re bringing</span><p>A situation you can&rsquo;t see clearly, or a choice between paths.</p></div>
              <div className="pcell"><span className="plab">We spend it</span><p>Naming what&rsquo;s actually going on, then setting direction.</p></div>
              <div className="pcell"><span className="plab">You leave with</span><p>Clear direction and next steps you can act on.</p></div>

              <div className="pcell phead">The Breakthrough Session<em>90 min &middot; $450</em></div>
              <div className="pcell"><span className="plab">Sounds like</span><p className="q">&ldquo;This is happening now, and I can&rsquo;t afford to get it wrong.&rdquo;</p></div>
              <div className="pcell"><span className="plab">You&rsquo;re bringing</span><p>A live, high-stakes situation with other people in it.</p></div>
              <div className="pcell"><span className="plab">We spend it</span><p>Mapping the situation and building the plan.</p></div>
              <div className="pcell"><span className="plab">You leave with</span><p>An action plan and a decision-making framework.</p></div>
            </div>
          </section>

          <section>
            <h3 className="sect">How it works</h3>
            <p className="dek">Three steps. The intake takes a few minutes, and then we work.</p>
            <div className="steps">
              <div className="step">
                <div className="n">1</div>
                <h4>Choose and book</h4>
                <p>Pick the session that matches where you are. You&rsquo;ll pay and choose your time in the same place.</p>
              </div>
              <div className="step">
                <div className="n">2</div>
                <h4>Answer a few questions</h4>
                <p>A short intake, so we spend our time working instead of spending the first fifteen minutes on background.</p>
              </div>
              <div className="step">
                <div className="n">3</div>
                <h4>Show up ready</h4>
                <p>We start from minute one. You leave with the deliverable named on your session, not a follow-up promise.</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="sect">What happens after</h3>
            <div className="after">
              <h3>If it&rsquo;s a fit, we keep going.</h3>
              <p>
                Some women come once, get what they needed, and go do it. Others want ongoing
                support, and we shape that together after we&rsquo;ve actually worked. If you
                enroll in a coaching engagement within 30 days,{" "}
                <b>up to $300 of your entry session applies toward it.</b>
              </p>
            </div>
          </section>

          <section>
            <h3 className="sect">Good to know</h3>
            <div className="fine">
              <ul>
                <li>All sessions are virtual via Zoom</li>
                <li>Everything we discuss is strictly confidential</li>
                <li>Entry session fees are non-refundable</li>
                <li>One entry session per client</li>
                <li>Rescheduling requires 24 hours notice</li>
                <li>Payment plans are available on ongoing engagements</li>
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
