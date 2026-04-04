export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  author: string;
  category: string;
  readTime: string;
  image?: string;
  content: string; // HTML content for the post body
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-executive-coaching-for-women-of-color",
    title: "What Is Executive Coaching for Women of Color? A Complete Guide",
    description:
      "Executive coaching designed for women of color addresses the unique challenges of navigating leadership while managing bias, code-switching, and invisibility. Learn what it is, how it works, and why it matters.",
    date: "2026-03-13",
    author: "Wendy Perdomo",
    category: "Executive Coaching",
    readTime: "7 min read",
    image: "/images/new/action-woc-leaders.jpg",
    content: `
      <p>Executive coaching is a professional development partnership between a trained coach and a leader — but executive coaching <em>for women of color</em> goes deeper. It addresses the unique, layered challenges that women of color face in the workplace: navigating bias and microaggressions, building executive presence on their own terms, overcoming imposter syndrome, and leading authentically without code-switching.</p>

      <h2>Why Generic Coaching Falls Short</h2>
      <p>Most executive coaching programs are built on frameworks that don't account for the lived experience of women of color in professional settings. They teach leadership skills in a vacuum — as if every leader starts from the same place with the same access, visibility, and support.</p>
      <p>The reality is different. Women of color are often the "only" in the room. They carry the weight of representation. They navigate unwritten rules that were never designed with them in mind. Generic coaching doesn't address any of this.</p>

      <h2>What Makes Coaching for Women of Color Different</h2>
      <p>At Coaching Women of Color&reg;, our approach is trauma-informed, culturally responsive, and grounded in over two decades of lived and professional experience. Here's what that looks like in practice:</p>
      <ul>
        <li><strong>Identity-affirming:</strong> We don't ask you to minimize who you are to fit in. We help you lead as your full self.</li>
        <li><strong>Contextually aware:</strong> We understand the dynamics of being a woman of color in predominantly white institutions, and we coach accordingly.</li>
        <li><strong>Action-oriented:</strong> Every session produces strategies you can implement immediately — not abstract concepts.</li>
        <li><strong>Confidential and safe:</strong> A space where you can be honest about what you're experiencing without judgment.</li>
      </ul>

      <h2>Who Is It For?</h2>
      <p>Executive coaching for women of color is designed for professionals at every stage:</p>
      <ul>
        <li>Mid-career leaders preparing for their next promotion</li>
        <li>Senior executives navigating organizational politics</li>
        <li>New managers building their leadership identity</li>
        <li>Entrepreneurs and founders scaling their impact</li>
      </ul>

      <h2>What to Expect</h2>
      <p>A typical coaching engagement starts with a discovery conversation to understand your goals, challenges, and what success looks like for you. From there, sessions are tailored to your specific needs — whether that's stakeholder management, executive presence, boundary-setting, or preparing for a critical conversation.</p>
      <p>Sessions are conducted virtually via Zoom, typically every two weeks, and range from 60 to 90 minutes. Between sessions, you'll have actionable strategies to practice and reflect on.</p>

      <h2>The Bottom Line</h2>
      <p>Executive coaching for women of color isn't a luxury — it's a strategic investment in leadership that acknowledges the full picture. When women of color thrive in leadership, organizations see stronger retention, better decision-making, and more inclusive cultures.</p>
      <p>If you're ready to explore what coaching could look like for you, <a href="/book/">book a free consultation</a> to start the conversation.</p>
    `,
  },
  {
    slug: "5-signs-your-organization-needs-a-leadership-development-partner",
    title: "5 Signs Your Organization Needs a Leadership Development Partner",
    description:
      "High turnover among diverse talent, stalled DEI initiatives, and leadership gaps are signals your organization needs more than training. Here are 5 signs it's time to invest in a leadership development partner.",
    date: "2026-03-10",
    author: "Wendy Perdomo",
    category: "Organizations",
    readTime: "5 min read",
    image: "/images/new/action-awards.jpg",
    content: `
      <p>Most organizations invest in leadership development at some point. But there's a difference between running an annual training workshop and partnering with someone who can transform how your leaders show up, retain talent, and build inclusive teams. Here are five signs it's time for the latter.</p>

      <h2>1. Your Diverse Talent Keeps Leaving</h2>
      <p>You've invested in recruiting diverse candidates, but they don't stay. Exit interviews mention "culture," "lack of growth," or "not feeling valued." This isn't a recruiting problem — it's a retention problem, and it starts with how leaders manage, develop, and advocate for their people.</p>

      <h2>2. Your DEI Initiatives Feel Performative</h2>
      <p>You've hosted the workshops. You've updated the mission statement. But nothing has fundamentally changed in how decisions are made, who gets promoted, or how conflict is handled. DEI training alone doesn't shift behavior — sustained coaching and accountability do.</p>

      <h2>3. Your Managers Are Struggling with Difficult Conversations</h2>
      <p>Performance issues go unaddressed. Feedback is avoided. Tension builds until it becomes a crisis. This is one of the most common leadership gaps — and one of the most fixable with the right coaching support.</p>

      <h2>4. You Have High-Potential Leaders with No Development Path</h2>
      <p>You can identify your emerging leaders, but you don't have a structured way to develop them. They're left to figure it out on their own, and eventually they leave for organizations that invest in their growth.</p>

      <h2>5. Your Leadership Team Lacks Psychological Safety</h2>
      <p>People don't speak up in meetings. New ideas are met with silence. Team members don't feel safe disagreeing or raising concerns. Without psychological safety, innovation dies and disengagement grows.</p>

      <h2>What a Leadership Development Partner Does Differently</h2>
      <p>A true partner doesn't just deliver a workshop and leave. They assess your organization's specific challenges, co-create solutions with your stakeholders, and provide sustained support through coaching, facilitation, and strategic advising.</p>
      <p>At Coaching Women of Color&reg;, we've partnered with 50+ organizations — from Fortune 500 companies to universities to government agencies — to develop leaders, strengthen teams, and build cultures where everyone can do their best work.</p>
      <p>Ready to explore what partnership could look like? <a href="/contact/">Start a conversation</a>.</p>
    `,
  },
  {
    slug: "how-to-overcome-imposter-syndrome-in-the-workplace",
    title: "How to Overcome Imposter Syndrome in the Workplace",
    description:
      "Imposter syndrome affects up to 82% of people, and women of color experience it at disproportionate rates. Learn practical strategies to recognize, reframe, and move through imposter syndrome at work.",
    date: "2026-03-06",
    author: "Wendy Perdomo",
    category: "Career Growth",
    readTime: "6 min read",
    image: "/images/new/action-women-club.jpg",
    content: `
      <p>You got the promotion, landed the role, or were invited to the table — and yet a voice in your head whispers, "You don't belong here." That's imposter syndrome, and if you're a woman of color in a professional setting, you're not imagining it. The environments you're navigating were often not designed with you in mind, which makes the feeling even more intense.</p>

      <h2>Understanding Imposter Syndrome</h2>
      <p>Imposter syndrome is the persistent feeling that you're a fraud despite evidence of your competence and accomplishments. It's not a character flaw — it's a response to environments that constantly signal you're "other."</p>
      <p>For women of color, imposter syndrome is often compounded by real systemic barriers: being the only person who looks like you in the room, having your qualifications questioned more than your peers, or being held to a higher standard while receiving less support.</p>

      <h2>5 Strategies That Actually Work</h2>

      <h3>1. Name It for What It Is</h3>
      <p>The first step is recognition. When you catch yourself thinking "I'm not qualified for this," pause and ask: Is this a fact, or is this imposter syndrome talking? More often than not, the evidence of your competence is right in front of you.</p>

      <h3>2. Keep a Wins File</h3>
      <p>Create a running document of your accomplishments, positive feedback, successful projects, and moments where you made an impact. When imposter syndrome flares up, review it. The evidence fights the narrative.</p>

      <h3>3. Find Your People</h3>
      <p>Isolation fuels imposter syndrome. Connect with other women of color in leadership — through coaching groups, professional networks, or communities like the Executive Leadership Lab. Hearing "me too" from someone you respect is powerful.</p>

      <h3>4. Separate Feelings from Facts</h3>
      <p>Feeling like you don't belong is not the same as not belonging. You were hired, promoted, or invited for a reason. Your feelings are valid, but they're not always accurate reflections of reality.</p>

      <h3>5. Get a Coach</h3>
      <p>A coach who understands the intersection of identity, leadership, and workplace dynamics can help you develop strategies specific to your situation. This isn't generic advice — it's targeted support for how <em>you</em> navigate <em>your</em> environment.</p>

      <h2>Moving Forward</h2>
      <p>Imposter syndrome may never fully disappear — but it doesn't have to run the show. With the right tools, support, and self-awareness, you can lead with confidence and authenticity.</p>
      <p>If imposter syndrome is holding you back from your next move, <a href="/for-individuals/">explore our coaching programs</a> designed specifically for women of color in leadership.</p>
    `,
  },
  {
    slug: "why-dei-training-alone-isnt-enough",
    title: "Why DEI Training Alone Isn't Enough — And What Works Instead",
    description:
      "One-off diversity trainings rarely change behavior. Learn why sustained coaching, leadership development, and accountability systems produce the lasting culture change organizations actually need.",
    date: "2026-03-01",
    author: "Wendy Perdomo",
    category: "Organizations",
    readTime: "6 min read",
    image: "/images/new/action-woc-leaders.jpg",
    content: `
      <p>Every year, organizations spend billions on diversity, equity, and inclusion training. And every year, the numbers barely move. Retention of diverse talent remains stagnant. Leadership pipelines stay homogeneous. Employees report the same frustrations in engagement surveys. So what's going wrong?</p>

      <h2>The Problem with One-Off Training</h2>
      <p>A two-hour workshop on unconscious bias doesn't change how a manager gives feedback on Monday morning. A keynote about inclusive leadership doesn't rewire the decision-making process for promotions. Training creates awareness — but awareness without sustained practice, accountability, and support doesn't produce behavior change.</p>
      <p>Research consistently shows that standalone diversity trainings can actually backfire, creating resentment or a false sense of "we've done our part" without any structural change to follow.</p>

      <h2>What Actually Works</h2>

      <h3>1. Sustained Coaching, Not One-Time Events</h3>
      <p>Behavior change happens through repetition, reflection, and real-time application. Executive coaching gives leaders a space to practice new skills, get feedback, and work through the specific dynamics of their team and organization — not just abstract concepts from a slide deck.</p>

      <h3>2. Leadership Development at Every Level</h3>
      <p>DEI isn't just an HR initiative. It's a leadership competency. When you invest in developing leaders who can navigate difference, build psychological safety, and advocate for their people, inclusion becomes part of how the organization operates — not a separate program.</p>

      <h3>3. Accountability Systems</h3>
      <p>Training without follow-through is performative. Effective programs include measurable goals, regular check-ins, and clear accountability for leaders. When inclusive behavior is part of performance expectations, it gets prioritized.</p>

      <h3>4. Addressing the System, Not Just Individuals</h3>
      <p>Bias doesn't just live in people's heads — it's embedded in processes, policies, and norms. Effective DEI work examines how decisions get made: Who's in the room? Who gets sponsored for stretch assignments? How is feedback delivered differently across groups? Coaching and consulting can surface these patterns and help organizations redesign them.</p>

      <h3>5. Centering the People Most Affected</h3>
      <p>Too often, DEI programs are designed for the majority rather than centering the experiences of those most impacted. Programs that coach and develop women of color, BIPOC leaders, and other underrepresented groups directly — rather than only training the people around them — produce stronger retention and advancement outcomes.</p>

      <h2>A Different Approach</h2>
      <p>At Coaching Women of Color&reg;, we don't deliver training and walk away. We partner with organizations through a multi-phase process: assessing the real challenges, co-creating solutions with stakeholders, executing through coaching and facilitation, and debriefing results to plan the next phase. It's not a workshop — it's a transformation engagement.</p>
      <p>If your organization is ready to move beyond check-the-box DEI, <a href="/for-organizations/">explore how we work with organizations</a> or <a href="/contact/">start a conversation</a>.</p>
    `,
  },
  {
    slug: "what-to-expect-from-your-first-coaching-session",
    title: "What to Expect from Your First Coaching Session",
    description:
      "Nervous about your first coaching session? Here's exactly what happens, what to prepare, and how to get the most out of your first conversation with an executive coach.",
    date: "2026-02-25",
    author: "Wendy Perdomo",
    category: "Career Growth",
    readTime: "5 min read",
    image: "/images/new/action-pitch.jpg",
    content: `
      <p>You've made the decision to invest in coaching. The session is booked. And now the questions start: What do I talk about? What if I don't know what I need? Will I have to share everything? If this sounds familiar, you're not alone — and the good news is that your first coaching session is designed to meet you exactly where you are.</p>

      <h2>Before the Session</h2>
      <p>You don't need to have everything figured out before your first session. That said, it helps to spend a few minutes reflecting on:</p>
      <ul>
        <li><strong>What prompted you to seek coaching?</strong> Was it a specific situation, a feeling, or a goal?</li>
        <li><strong>What would success look like?</strong> If coaching went well, what would be different in 3-6 months?</li>
        <li><strong>What's your biggest challenge right now?</strong> Not the polished version — the real one.</li>
      </ul>
      <p>You don't need to write a formal document. Just come with an open mind and a willingness to be honest.</p>

      <h2>During the Session</h2>
      <p>Your first session is a conversation, not a test. Here's what typically happens:</p>

      <h3>Getting to Know Each Other</h3>
      <p>Your coach will ask about your background, your current role, and what's on your mind. This isn't small talk — it's the foundation for understanding your context so the coaching is relevant and specific to your situation.</p>

      <h3>Identifying What Matters Most</h3>
      <p>Together, you'll explore what's most important to you right now. Sometimes the thing you came in wanting to work on reveals a deeper pattern underneath. A good coach helps you see connections you might miss on your own.</p>

      <h3>Setting the Tone</h3>
      <p>Coaching is a partnership, not a lecture. Your coach will explain how sessions work, establish confidentiality, and create space for you to show up authentically. For women of color especially, this means a space where you don't have to translate your experience or justify your perspective.</p>

      <h3>Leaving with Something Concrete</h3>
      <p>You won't leave your first session with only good feelings — you'll leave with at least one actionable strategy or insight you can apply immediately. Coaching is practical. Every conversation should move you forward.</p>

      <h2>Common First-Session Concerns</h2>
      <p><strong>"What if I get emotional?"</strong> That's completely normal and welcome. Coaching touches on things that matter deeply to you. A skilled coach knows how to hold space for emotion without making it the entire session.</p>
      <p><strong>"What if I don't know what to work on?"</strong> That's fine. Your coach will guide the conversation. Often the most productive sessions start with "I'm not sure where to begin."</p>
      <p><strong>"Is everything confidential?"</strong> Yes. What you share in coaching stays in coaching. If your organization is sponsoring the coaching, your coach may share high-level themes or progress with your sponsor, but never the details of your conversations.</p>

      <h2>After the Session</h2>
      <p>Take a few minutes after the session to jot down what resonated, what surprised you, and what you want to try before the next session. The space between sessions is where the real growth happens — coaching gives you the insight, and you bring it to life in your daily work.</p>

      <h2>Ready to Start?</h2>
      <p>Your first session is a conversation about possibility. It's the beginning of investing in yourself as a leader. If you're ready, <a href="/book/">book a free consultation</a> and let's talk about what coaching could look like for you.</p>
    `,
  },
];
