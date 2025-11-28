import React, { useState } from "react";

// ═══════════════════════════════════════════════════════════════════════════════
// VEBLEN LAUNCH SYSTEM - DEMO VERSION WITH MOCK DATA
// ═══════════════════════════════════════════════════════════════════════════════

export default function Home() {
  return <VeblenLaunchDemo />;
}

function VeblenLaunchDemo() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  
  // Business Profile State - Pre-filled for demo
  const [businessProfile, setBusinessProfile] = useState({
    businessName: "",
    industry: "",
    offer: "",
    promise: "",
    priceRange: "",
    targetAudience: "",
    problemSolved: "",
    desiredResult: "",
    proofAssets: "",
    brandGuardrails: "",
    platforms: [],
    region: ""
  });
  
  const [researchData, setResearchData] = useState({
    pillars: [],
    hookBank: [],
    topicIdeas: [],
    painPoints: [],
    competitorInsights: []
  });
  
  const [scripts, setScripts] = useState([]);
  const [filmingGuide, setFilmingGuide] = useState({
    shotList: [],
    locations: [],
    props: [],
    wardrobe: [],
    genericBRoll: [],
    ctaVariations: [],
    filmingOrder: []
  });
  const [calendar, setCalendar] = useState([]);
  
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [websiteData, setWebsiteData] = useState(null);
  const [isAnalyzingWebsite, setIsAnalyzingWebsite] = useState(false);

  const workflowSteps = [
    { id: 0, name: "Business Profile", icon: "◉", description: "Define your offer, audience & brand" },
    { id: 1, name: "Research", icon: "◎", description: "Build pillars, hooks & topic universe" },
    { id: 2, name: "Script Writing", icon: "◈", description: "Convert ideas into cue-card scripts" },
    { id: 3, name: "Filming Guide", icon: "◇", description: "Shot lists & visual planning" },
    { id: 4, name: "Calendarisation", icon: "◆", description: "Map content to posting schedule" },
    { id: 5, name: "Export & Launch", icon: "◐", description: "Export everything & go live" }
  ];

  const industries = [
    "Construction & Building", "Trades & Services", "Real Estate",
    "Finance & Accounting", "Hospitality & Food", "Health & Fitness",
    "Professional Services", "E-commerce & Retail", "Technology & SaaS",
    "Education & Training", "Other"
  ];

  const platforms = ["TikTok", "Instagram Reels", "YouTube Shorts", "Facebook", "LinkedIn"];

  // ═══════════════════════════════════════════════════════════════════════════════
  // MOCK DATA GENERATORS (Simulates AI responses)
  // ═══════════════════════════════════════════════════════════════════════════════

  const generateMockWebsiteAnalysis = () => {
    setIsAnalyzingWebsite(true);
    setTimeout(() => {
      const mockData = {
        businessName: businessProfile.businessName || "Demo Business",
        industry: businessProfile.industry || "Trades & Services",
        mainOffer: "Premium custom trailers built for Australian tradies",
        valueProposition: "Trailers that pay for themselves in 12 months through better organisation and reduced tool damage",
        targetAudience: "Tradies and contractors aged 25-55 in South East Queensland",
        problemsSolved: ["Tool damage from rattling", "Disorganisation on job sites", "Rust and coastal wear", "Unclear warranty coverage"],
        keyServices: ["Custom trailer builds", "Tool storage systems", "Finance packages", "Warranty support"],
        proofPoints: ["500+ trailers delivered", "4.9 star Google rating", "Australian made"],
        brandTone: "Professional, knowledgeable, mate-to-mate honest",
        uniqueAngles: ["12-month payback guarantee", "Coastal-grade protection", "Silent drawer systems"],
        contentThemes: ["Trailer setups", "Organisation tips", "Cost savings", "Durability tests", "Customer stories"],
        potentialHooks: [
          "Why your trailer is costing you $200/week",
          "The rust test that 90% of trailers fail",
          "Stop buying the biggest toolbox",
          "How to write off your trailer this EOFY",
          "The drawer system that changed everything"
        ],
        painPoints: ["Tools bouncing and breaking", "Rust near the coast", "Warranty fights", "Finance confusion"],
        socialProof: ["500+ happy tradies", "Featured in Trade Magazine", "Gold Coast Business Award finalist"],
        competitors: ["Big box retailers", "Generic trailer manufacturers"],
        region: "Gold Coast, Queensland"
      };
      
      setWebsiteData(mockData);
      setBusinessProfile(prev => ({
        ...prev,
        businessName: mockData.businessName,
        industry: mockData.industry,
        offer: mockData.mainOffer,
        promise: mockData.valueProposition,
        targetAudience: mockData.targetAudience,
        problemSolved: mockData.problemsSolved.join(". "),
        proofAssets: mockData.proofPoints.join(", "),
        region: mockData.region
      }));
      setIsAnalyzingWebsite(false);
    }, 2000);
  };

  const generateMockResearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setResearchData({
        pillars: [
          { name: "Buying Guidance", description: "Help customers make informed decisions", subTopics: ["Price comparisons", "Feature breakdowns", "What to look for", "Red flags to avoid"] },
          { name: "Maintenance & Care", description: "Keep trailers in top condition", subTopics: ["Rust prevention", "Bearing checks", "Cleaning tips", "Seasonal prep"] },
          { name: "Organisation Systems", description: "Maximise storage and efficiency", subTopics: ["Drawer systems", "Tool placement", "Load distribution", "Quick access setups"] },
          { name: "Finance & Tax", description: "Make ownership affordable", subTopics: ["Tax write-offs", "Finance options", "ROI calculations", "Depreciation"] },
          { name: "Social Proof", description: "Show real results", subTopics: ["Customer transformations", "Before/after", "Testimonials", "Case studies"] }
        ],
        hookBank: [
          { hook: "The 3 trailer upgrades that pay for themselves in 12 months", archetype: "Big Outcome", cluster: "Cost" },
          { hook: "Stop buying the biggest toolbox until you fix this", archetype: "Contrarian Take", cluster: "Quality" },
          { hook: "Most tradie trailers fail this simple rust test", archetype: "Common Mistake", cluster: "Risk" },
          { hook: "Aluminium lasts longer right? Here's the 2-year road test", archetype: "Myth vs Fact", cluster: "Quality" },
          { hook: "5-point pre-delivery check that avoids warranty fights", archetype: "Checklist", cluster: "Risk" },
          { hook: "From rattly mess to silent and organised in one morning", archetype: "Before/After", cluster: "Quality" },
          { hook: "We lost a $6K job because of one sentence in our quote", archetype: "Story Cold Open", cluster: "Cost" },
          { hook: "I can get a cheaper trailer at Bunnings - here's the math", archetype: "Objection Flip", cluster: "Cost" },
          { hook: "What happens if this breaks on the highway? Our fix plan", archetype: "Risk Removal", cluster: "Risk" },
          { hook: "Every trailer ad says 'tough' - here's how we prove it", archetype: "Category POV", cluster: "Quality" },
          { hook: "The hidden cost that makes cheap trailers expensive", archetype: "Contrarian Take", cluster: "Cost" },
          { hook: "Why coastal tradies need different trailer specs", archetype: "Authority", cluster: "Quality" },
          { hook: "The legal payload limit getting QLD tradies fined", archetype: "Common Mistake", cluster: "Risk" },
          { hook: "How one drawer system saved me 30 minutes every job", archetype: "Story Cold Open", cluster: "Speed" },
          { hook: "The tax write-off most tradies miss on their trailer", archetype: "Big Outcome", cluster: "Cost" }
        ],
        topicIdeas: [
          { title: "3 Upgrades That Pay For Themselves", pillar: "Finance & Tax", hook: "The 3 trailer upgrades that pay for themselves in 12 months", visualBeat: "Show ROI calculation on whiteboard", proof: "Customer testimonial clips", scoreDemand: 5, scoreBenefit: 5, scoreEase: 4, scoreDiff: 4, scoreEvergreen: 5 },
          { title: "The Rust Test", pillar: "Maintenance & Care", hook: "Most tradie trailers fail this simple rust test", visualBeat: "Live rust test demonstration", proof: "Before/after rust photos", scoreDemand: 4, scoreBenefit: 4, scoreEase: 5, scoreDiff: 5, scoreEvergreen: 5 },
          { title: "Silent Drawer System Demo", pillar: "Organisation Systems", hook: "From rattly mess to silent and organised", visualBeat: "Side-by-side shake test", proof: "Slow-mo drawer opening", scoreDemand: 5, scoreBenefit: 4, scoreEase: 5, scoreDiff: 4, scoreEvergreen: 4 },
          { title: "Payload Fines Explained", pillar: "Buying Guidance", hook: "The legal payload limit getting tradies fined", visualBeat: "Weighbridge demonstration", proof: "Fine example screenshot", scoreDemand: 4, scoreBenefit: 5, scoreEase: 3, scoreDiff: 4, scoreEvergreen: 5 },
          { title: "EOFY Tax Write-Off Guide", pillar: "Finance & Tax", hook: "The tax write-off most tradies miss", visualBeat: "Calculator walkthrough", proof: "Accountant quote", scoreDemand: 5, scoreBenefit: 5, scoreEase: 4, scoreDiff: 3, scoreEvergreen: 3 },
          { title: "Big Box vs Custom - The Math", pillar: "Buying Guidance", hook: "I can get a cheaper trailer at Bunnings", visualBeat: "Cost comparison graphic", proof: "2-year cost breakdown", scoreDemand: 5, scoreBenefit: 5, scoreEase: 4, scoreDiff: 5, scoreEvergreen: 5 },
          { title: "Coastal Spec Differences", pillar: "Buying Guidance", hook: "Why coastal tradies need different specs", visualBeat: "Salt spray demo", proof: "Coating comparison", scoreDemand: 3, scoreBenefit: 4, scoreEase: 4, scoreDiff: 5, scoreEvergreen: 5 },
          { title: "Pre-Delivery Checklist", pillar: "Buying Guidance", hook: "5-point check that avoids warranty fights", visualBeat: "Checklist finger counts", proof: "Example warranty claim", scoreDemand: 4, scoreBenefit: 4, scoreEase: 5, scoreDiff: 3, scoreEvergreen: 5 },
          { title: "Tool Organisation Hacks", pillar: "Organisation Systems", hook: "How one drawer system saved 30 minutes every job", visualBeat: "Time-lapse setup", proof: "Customer interview", scoreDemand: 4, scoreBenefit: 4, scoreEase: 5, scoreDiff: 3, scoreEvergreen: 4 },
          { title: "Customer Transformation Story", pillar: "Social Proof", hook: "We lost a $6K job because of one sentence", visualBeat: "Before/after walkthrough", proof: "Customer on camera", scoreDemand: 3, scoreBenefit: 5, scoreEase: 3, scoreDiff: 5, scoreEvergreen: 4 }
        ],
        painPoints: [
          { pain: "My tools bounce around and break on rough roads", tag: "Pain", source: "Customer interviews" },
          { pain: "I'm worried about rust living near the coast", tag: "Risk", source: "Facebook comments" },
          { pain: "Finance looks confusing and I don't want to get ripped off", tag: "Risk", source: "Sales calls" },
          { pain: "I can't be off the road for 2 weeks waiting for repairs", tag: "Pain", source: "Google reviews" },
          { pain: "I want my trailer to look professional when I rock up to jobs", tag: "Status", source: "Customer interviews" },
          { pain: "The cheap trailer I bought is already falling apart", tag: "Pain", source: "Competitor reviews" },
          { pain: "I need to write this off before EOFY", tag: "Desire", source: "Sales calls" },
          { pain: "My current setup wastes 20 minutes finding tools every job", tag: "Pain", source: "Customer interviews" }
        ],
        competitorInsights: [
          { competitor: "Bunnings/Big Box", whatWorks: "Price point messaging, availability", gap: "No customisation, poor durability, no support" },
          { competitor: "Generic Manufacturers", whatWorks: "Volume, basic specs", gap: "No trade-specific features, poor after-sales" },
          { competitor: "Other Custom Builders", whatWorks: "Quality messaging", gap: "No content presence, no social proof at scale" }
        ]
      });
      setIsLoading(false);
    }, 2500);
  };

  const generateMockScripts = () => {
    setIsLoading(true);
    setTimeout(() => {
      setScripts([
        {
          id: 1,
          title: "3 Upgrades That Pay For Themselves",
          hook: "The 3 trailer upgrades that pay for themselves in 12 months",
          setup: "Most tradies spend money on their trailer once and never think about it again. But there are 3 specific upgrades that actually make you money back.",
          payoff: "First, silent drawers - no more broken drill bits. Second, load scales - no more overweight fines. Third, proper tie-down systems - no more chasing tools across the tray. Each one saves you hundreds per year.",
          cta: "Want the full ROI breakdown? Comment 'UPGRADE' and I'll send it through.",
          visualNotes: "Start with messy trailer shot, transition to organised setup, show each upgrade with price tag graphic",
          duration: "35-40 sec",
          archetype: "Educational",
          contentType: "Authority"
        },
        {
          id: 2,
          title: "The Rust Test",
          hook: "Most tradie trailers fail this simple rust test near the beach",
          setup: "If you're within 20km of the coast, your trailer is getting hammered by salt air every single day. And most powder coats can't handle it.",
          payoff: "Here's the test - run your finger along the inside of the chassis rails. If you feel any roughness or see orange, it's already started. The fix costs 10x more than prevention.",
          cta: "Want to know what coating actually works? Drop a comment.",
          visualNotes: "Close-up of finger running along chassis, reveal rust spots, show comparison of good vs bad coating",
          duration: "30-35 sec",
          archetype: "Educational",
          contentType: "Pain"
        },
        {
          id: 3,
          title: "Silent Drawer System Demo",
          hook: "From rattly mess to silent and organised in one morning",
          setup: "You know that sound - every bump, every pothole, your tools crashing around. It's not just annoying, it's expensive.",
          payoff: "Watch this. Full shake test, not a sound. These soft-close mechanisms cost about $200 extra but save you thousands in broken gear. Plus you actually look professional when you open up on site.",
          cta: "DM 'SILENT' for our drawer system specs.",
          visualNotes: "Split screen: rattly drawer vs silent drawer shake test, slow-mo soft close, satisfied tradie reaction",
          duration: "35 sec",
          archetype: "Authority",
          contentType: "Proof"
        },
        {
          id: 4,
          title: "Payload Fines Explained",
          hook: "The legal payload limit that gets QLD tradies fined",
          setup: "Quick quiz - do you know your trailer's actual payload limit? Not the sticker, the real number after you add all your gear?",
          payoff: "Your 2-tonne trailer probably has a 750kg payload. Add your toolboxes, that's down to 500kg. Add your generator, compressor, materials - you're probably over. Fines start at $575 and go way up.",
          cta: "Comment 'PAYLOAD' and I'll send you the calculator we use.",
          visualNotes: "Show weighbridge, calculator graphic breaking down weights, fine amount on screen",
          duration: "40 sec",
          archetype: "Educational",
          contentType: "Authority"
        },
        {
          id: 5,
          title: "EOFY Tax Write-Off",
          hook: "The tax write-off most tradies miss on their trailer",
          setup: "EOFY is coming and there's one deduction that could save you thousands that your accountant might not mention.",
          payoff: "If you use your trailer more than 50% for work, you can claim instant asset write-off. On a $30K trailer, that's potentially $9K back in your pocket this tax year. But you need to have it delivered before June 30.",
          cta: "Want to know exactly what you can claim? Link in bio for our EOFY guide.",
          visualNotes: "Calendar showing EOFY deadline, calculator showing tax savings, delivery truck shot",
          duration: "35 sec",
          archetype: "Educational",
          contentType: "CTA"
        },
        {
          id: 6,
          title: "Big Box vs Custom - The Real Math",
          hook: "I can get a cheaper trailer at Bunnings - here's the 2-year math",
          setup: "Yeah you can get a trailer for $2K at the big box store. Let's do the actual math on what that costs you over 2 years.",
          payoff: "Cheap trailer: $2K purchase, $800 in broken tools, $400 rust repairs, $300 in fines, plus it's worth nothing at resale. Total: $3,500 and you've got junk. Quality trailer: $8K, zero repairs, resells for $5K. Actual cost: $3K and you've got something that works.",
          cta: "Want the full breakdown spreadsheet? Comment 'MATH'.",
          visualNotes: "Side by side comparison graphic, calculator breakdown, before/after quality comparison",
          duration: "45 sec",
          archetype: "Authority",
          contentType: "Proof"
        },
        {
          id: 7,
          title: "Customer Story - The $6K Lesson",
          hook: "We lost a $6K job because of one sentence in our quote",
          setup: "True story from one of our customers. He was quoting a big commercial job, looked super professional... until they saw his trailer.",
          payoff: "The client actually told him - 'If you can't look after your own gear, how can we trust you with our project?' He called us the next week. Now he says his trailer wins him jobs before he even opens his mouth.",
          cta: "Your trailer is your first impression. What's yours saying?",
          visualNotes: "Customer interview clip, before shot of messy trailer, after shot of professional setup, job site arrival",
          duration: "40 sec",
          archetype: "Storytelling",
          contentType: "Story"
        },
        {
          id: 8,
          title: "Pre-Delivery Checklist",
          hook: "5-point pre-delivery check that avoids warranty fights",
          setup: "Before you sign for your new trailer, run through this checklist. It takes 5 minutes and can save you months of headaches.",
          payoff: "One - all welds smooth, no grinding marks. Two - lights work on both sides. Three - jockey wheel spins freely. Four - safety chains aren't twisted. Five - spare tyre is inflated. Get all five on video before you drive off.",
          cta: "Save this for when you pick up your trailer.",
          visualNotes: "Numbered checklist on screen, close-up of each check point, phone recording for documentation",
          duration: "35 sec",
          archetype: "Educational",
          contentType: "Authority"
        }
      ]);
      setIsLoading(false);
    }, 2000);
  };

  const generateMockFilmingGuide = () => {
    setIsLoading(true);
    setTimeout(() => {
      setFilmingGuide({
        shotList: scripts.map((script, idx) => ({
          scriptId: script.id,
          scriptTitle: script.title,
          talkingHeadLocation: idx % 3 === 0 ? "Workshop interior" : idx % 3 === 1 ? "Outdoor yard" : "Inside trailer",
          cameraAngles: ["wide", "mid", "close-up"],
          bRollShots: ["Product demo", "Customer reaction", "Detail close-up"],
          props: ["Relevant tools", "Clipboard", "Phone for demo"],
          visualArchetype: script.contentType
        })),
        locations: [
          { name: "Workshop Interior", scripts: [1, 4, 7], setupNotes: "Clean branded background, good lighting, logo visible" },
          { name: "Outdoor Yard", scripts: [2, 5, 8], setupNotes: "Trailers lined up, natural light, morning is best" },
          { name: "Inside Trailer POV", scripts: [3, 6], setupNotes: "Drawer systems visible, tools organised, cinematic angle" }
        ],
        props: [
          { item: "Drill bits (broken vs new)", purpose: "Show tool damage from rattling", scripts: [1, 3] },
          { item: "Weighbridge ticket", purpose: "Payload demonstration", scripts: [4] },
          { item: "Rust samples", purpose: "Coating comparison", scripts: [2] },
          { item: "Calculator/phone", purpose: "Math breakdowns", scripts: [5, 6] },
          { item: "Checklist clipboard", purpose: "Pre-delivery walkthrough", scripts: [8] }
        ],
        wardrobe: [
          { outfit: "Branded polo + clean work pants", vibe: "Professional", scripts: [1, 2, 3, 4] },
          { outfit: "Hi-vis vest + hard hat", vibe: "On-site authentic", scripts: [5, 6] },
          { outfit: "Casual branded tee", vibe: "Approachable", scripts: [7, 8] }
        ],
        genericBRoll: [
          "Staff loading tools into drawers",
          "Drone shot over trailer yard",
          "Handshake with customer",
          "Trailer being hitched to ute",
          "Slow-mo drawer soft close",
          "Water bead test on coating",
          "Wheels going over speed bump",
          "Sun glinting off clean trailer",
          "Customer driving away happy",
          "Team working in workshop"
        ],
        ctaVariations: [
          { text: "DM us 'INFO' to get started", tone: "Friendly" },
          { text: "Comment below and we'll reach out", tone: "Casual" },
          { text: "Link in bio for your free quote", tone: "Direct" },
          { text: "Call the number on screen now", tone: "Urgent" }
        ],
        filmingOrder: [
          { batch: 1, location: "Workshop Interior", scripts: [1, 4, 7], estimatedTime: "45 min" },
          { batch: 2, location: "Outdoor Yard", scripts: [2, 5, 8], estimatedTime: "45 min" },
          { batch: 3, location: "Inside Trailer", scripts: [3, 6], estimatedTime: "30 min" },
          { batch: 4, location: "Various", scripts: ["B-Roll"], estimatedTime: "30 min" }
        ]
      });
      setIsLoading(false);
    }, 2000);
  };

  const generateMockCalendar = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCalendar([
        {
          week: 1,
          days: [
            { day: "Monday", scriptId: 2, scriptTitle: "The Rust Test", contentType: "Pain", platforms: ["TikTok", "Instagram Reels"], postingTime: "7:00 AM" },
            { day: "Wednesday", scriptId: 3, scriptTitle: "Silent Drawer Demo", contentType: "Proof", platforms: ["TikTok", "Instagram Reels", "YouTube Shorts"], postingTime: "12:00 PM" },
            { day: "Friday", scriptId: 1, scriptTitle: "3 Upgrades ROI", contentType: "Authority", platforms: ["Instagram Reels", "LinkedIn"], postingTime: "6:00 PM" },
            { day: "Sunday", scriptId: 5, scriptTitle: "EOFY Tax Write-Off", contentType: "CTA", platforms: ["Facebook", "Instagram Reels"], postingTime: "10:00 AM" }
          ]
        },
        {
          week: 2,
          days: [
            { day: "Monday", scriptId: 6, scriptTitle: "Big Box vs Custom Math", contentType: "Proof", platforms: ["TikTok", "Instagram Reels"], postingTime: "7:00 AM" },
            { day: "Wednesday", scriptId: 4, scriptTitle: "Payload Fines Explained", contentType: "Authority", platforms: ["TikTok", "YouTube Shorts"], postingTime: "12:00 PM" },
            { day: "Friday", scriptId: 7, scriptTitle: "Customer Story - $6K Lesson", contentType: "Story", platforms: ["Instagram Reels", "Facebook"], postingTime: "6:00 PM" },
            { day: "Sunday", scriptId: 8, scriptTitle: "Pre-Delivery Checklist", contentType: "Authority", platforms: ["TikTok", "Instagram Reels"], postingTime: "10:00 AM" }
          ]
        },
        {
          week: 3,
          days: [
            { day: "Monday", scriptId: 2, scriptTitle: "The Rust Test (Repost)", contentType: "Pain", platforms: ["Facebook", "LinkedIn"], postingTime: "7:00 AM" },
            { day: "Wednesday", scriptId: 1, scriptTitle: "3 Upgrades ROI (Cut 2)", contentType: "Authority", platforms: ["TikTok", "YouTube Shorts"], postingTime: "12:00 PM" },
            { day: "Friday", scriptId: 3, scriptTitle: "Silent Drawer (Extended)", contentType: "Proof", platforms: ["YouTube Shorts"], postingTime: "6:00 PM" },
            { day: "Sunday", scriptId: 5, scriptTitle: "EOFY Reminder", contentType: "CTA", platforms: ["All Platforms"], postingTime: "10:00 AM" }
          ]
        },
        {
          week: 4,
          days: [
            { day: "Monday", scriptId: 4, scriptTitle: "Payload Calculator", contentType: "Authority", platforms: ["TikTok", "Instagram Reels"], postingTime: "7:00 AM" },
            { day: "Wednesday", scriptId: 7, scriptTitle: "Customer Story Pt 2", contentType: "Story", platforms: ["Instagram Reels"], postingTime: "12:00 PM" },
            { day: "Friday", scriptId: 6, scriptTitle: "Cost Comparison Update", contentType: "Proof", platforms: ["Facebook", "LinkedIn"], postingTime: "6:00 PM" },
            { day: "Sunday", scriptId: 8, scriptTitle: "Checklist Save This", contentType: "Authority", platforms: ["TikTok", "Instagram Reels"], postingTime: "10:00 AM" }
          ]
        }
      ]);
      setIsLoading(false);
    }, 1500);
  };

  // ═══════════════════════════════════════════════════════════════════════════════
  // UI COMPONENTS
  // ═══════════════════════════════════════════════════════════════════════════════

  const LoadingSpinner = () => (
    <div className="flex items-center justify-center gap-3 py-8">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-orange-500/20 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-orange-500 rounded-full border-t-transparent animate-spin"></div>
      </div>
      <span className="text-white font-medium tracking-wide">Generating (Demo Mode)...</span>
    </div>
  );

  const StepIndicator = ({ step, isActive, isComplete }) => (
    <div 
      onClick={() => setCurrentStep(step.id)}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300
        ${isActive ? "bg-orange-500/10 border border-orange-500" : isComplete ? "bg-neutral-900 border border-neutral-700 hover:border-orange-500/50" : "bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600"}`}
    >
      <span className={`text-2xl ${isActive ? "text-orange-500" : isComplete ? "text-green-500" : "text-neutral-600"}`}>
        {isComplete && !isActive ? "✓" : step.icon}
      </span>
      <div className="flex-1 min-w-0">
        <div className={`font-semibold text-sm ${isActive ? "text-white" : "text-neutral-400"}`}>{step.name}</div>
        <div className="text-xs text-neutral-500 truncate">{step.description}</div>
      </div>
    </div>
  );

  // ═══════════════════════════════════════════════════════════════════════════════
  // STEP RENDERERS
  // ═══════════════════════════════════════════════════════════════════════════════

  const renderBusinessProfile = () => (
    <div className="space-y-8">
      <div className="border-b border-neutral-800 pb-6">
        <h2 className="text-3xl font-bold text-orange-500">Business Profile</h2>
        <p className="text-neutral-400 mt-2">Define your offer, audience, and brand guardrails</p>
      </div>

      {/* Demo Mode Banner */}
      <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 flex items-center gap-4">
        <span className="text-2xl">🎮</span>
        <div>
          <h3 className="font-bold text-orange-500">Demo Mode Active</h3>
          <p className="text-neutral-400 text-sm">Click "Analyze Site" or fill in details manually to see mock AI responses</p>
        </div>
      </div>

      {/* Website Analyzer */}
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-2xl">🌐</div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-1">Quick Start: Analyze Website</h3>
            <p className="text-neutral-400 text-sm mb-4">Enter any URL - demo will generate realistic mock data</p>
            <div className="flex gap-3">
              <input
                type="text"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                placeholder="https://example.com"
                className="flex-1 bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
              />
              <button
                onClick={generateMockWebsiteAnalysis}
                disabled={isAnalyzingWebsite}
                className="px-6 py-3 bg-orange-500 text-black font-bold rounded-lg hover:bg-orange-400 transition-all disabled:opacity-50"
              >
                {isAnalyzingWebsite ? "Analyzing..." : "⚡ Analyze Site"}
              </button>
            </div>
          </div>
        </div>

        {websiteData && (
          <div className="mt-6 pt-6 border-t border-neutral-800">
            <h4 className="font-bold text-orange-500 mb-4">✓ Website Analysis Complete</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {websiteData.keyServices && (
                <div className="bg-black rounded-lg p-4">
                  <span className="text-xs text-neutral-500 uppercase">Services</span>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {websiteData.keyServices.map((s, i) => (
                      <span key={i} className="px-2 py-1 bg-orange-500/20 text-orange-500 rounded text-xs">{s}</span>
                    ))}
                  </div>
                </div>
              )}
              {websiteData.painPoints && (
                <div className="bg-black rounded-lg p-4">
                  <span className="text-xs text-neutral-500 uppercase">Pain Points</span>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {websiteData.painPoints.map((p, i) => (
                      <span key={i} className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">{p}</span>
                    ))}
                  </div>
                </div>
              )}
              {websiteData.contentThemes && (
                <div className="bg-black rounded-lg p-4">
                  <span className="text-xs text-neutral-500 uppercase">Content Themes</span>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {websiteData.contentThemes.map((t, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Manual Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-orange-500">Business Identity</h3>
          <input
            type="text"
            value={businessProfile.businessName}
            onChange={(e) => setBusinessProfile(prev => ({ ...prev, businessName: e.target.value }))}
            placeholder="Business Name"
            className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
          />
          <select
            value={businessProfile.industry}
            onChange={(e) => setBusinessProfile(prev => ({ ...prev, industry: e.target.value }))}
            className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
          >
            <option value="">Select Industry...</option>
            {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
          </select>
          <input
            type="text"
            value={businessProfile.region}
            onChange={(e) => setBusinessProfile(prev => ({ ...prev, region: e.target.value }))}
            placeholder="Region (e.g., Gold Coast, QLD)"
            className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-orange-500">Platforms</h3>
          <div className="flex flex-wrap gap-2">
            {platforms.map(platform => (
              <button
                key={platform}
                onClick={() => setBusinessProfile(prev => ({
                  ...prev,
                  platforms: prev.platforms.includes(platform)
                    ? prev.platforms.filter(p => p !== platform)
                    : [...prev.platforms, platform]
                }))}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  businessProfile.platforms.includes(platform)
                    ? "bg-orange-500 text-black"
                    : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800"
                }`}
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-6 border-t border-neutral-800">
        <button
          onClick={() => setCurrentStep(1)}
          className="px-8 py-3 bg-orange-500 text-black font-bold rounded-lg hover:bg-orange-400 transition-all flex items-center gap-2"
        >
          Continue to Research →
        </button>
      </div>
    </div>
  );

  const renderResearch = () => (
    <div className="space-y-8">
      <div className="border-b border-neutral-800 pb-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold text-orange-500">Research Engine</h2>
          <p className="text-neutral-400 mt-2">Build your content pillars, hook bank, and topic universe</p>
        </div>
        <button
          onClick={generateMockResearch}
          disabled={isLoading}
          className="px-6 py-3 bg-orange-500 text-black font-bold rounded-lg hover:bg-orange-400 transition-all disabled:opacity-50"
        >
          {isLoading ? "Generating..." : "⚡ Generate Research"}
        </button>
      </div>

      {isLoading ? <LoadingSpinner /> : researchData.pillars.length > 0 ? (
        <div className="space-y-8">
          {/* Pillars */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">Content Pillars</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {researchData.pillars.map((pillar, idx) => (
                <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                  <h4 className="font-bold text-white text-lg mb-2">{pillar.name}</h4>
                  <p className="text-neutral-400 text-sm mb-3">{pillar.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {pillar.subTopics?.map((topic, i) => (
                      <span key={i} className="px-2 py-1 bg-neutral-800 rounded text-xs text-neutral-300">{topic}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hook Bank */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">Hook Bank ({researchData.hookBank.length} hooks)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2">
              {researchData.hookBank.map((hook, idx) => (
                <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 hover:border-orange-500/30 transition-colors">
                  <p className="text-white font-medium mb-2">"{hook.hook}"</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-500 rounded text-xs">{hook.archetype}</span>
                    <span className="px-2 py-1 bg-neutral-800 text-neutral-400 rounded text-xs">{hook.cluster}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Topic Ideas */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">Topic Ideas ({researchData.topicIdeas.length} ideas)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-800">
                    <th className="text-left py-3 px-4 text-neutral-400 font-medium">Topic</th>
                    <th className="text-left py-3 px-4 text-neutral-400 font-medium">Hook</th>
                    <th className="text-center py-3 px-4 text-neutral-400 font-medium">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {researchData.topicIdeas.map((topic, idx) => {
                    const totalScore = (topic.scoreDemand || 0) + (topic.scoreBenefit || 0) + (topic.scoreEase || 0) + (topic.scoreDiff || 0) + (topic.scoreEvergreen || 0);
                    return (
                      <tr key={idx} className="border-b border-neutral-800 hover:bg-neutral-900/50">
                        <td className="py-3 px-4 text-white">{topic.title}</td>
                        <td className="py-3 px-4 text-neutral-400 text-xs max-w-xs truncate">{topic.hook}</td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${totalScore >= 20 ? "bg-green-500/20 text-green-400" : totalScore >= 15 ? "bg-orange-500/20 text-orange-500" : "bg-neutral-800 text-neutral-400"}`}>
                            {totalScore}/25
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pain Points */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">Pain Points</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {researchData.painPoints.map((pain, idx) => (
                <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
                  <p className="text-white text-sm mb-2">"{pain.pain}"</p>
                  <span className={`px-2 py-1 rounded text-xs ${pain.tag === "Pain" ? "bg-red-500/20 text-red-400" : pain.tag === "Desire" ? "bg-green-500/20 text-green-400" : pain.tag === "Risk" ? "bg-orange-500/20 text-orange-500" : "bg-purple-500/20 text-purple-400"}`}>
                    {pain.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 border-2 border-dashed border-neutral-800 rounded-xl">
          <div className="text-6xl mb-4">🔬</div>
          <h3 className="text-xl font-bold text-white mb-2">No Research Generated Yet</h3>
          <p className="text-neutral-500 max-w-md mx-auto">Click "Generate Research" to build your content pillars, hook bank, and topic universe.</p>
        </div>
      )}

      <div className="flex justify-between pt-6 border-t border-neutral-800">
        <button onClick={() => setCurrentStep(0)} className="px-6 py-3 bg-neutral-900 text-neutral-300 font-medium rounded-lg hover:bg-neutral-800 transition-all">← Back</button>
        <button onClick={() => setCurrentStep(2)} disabled={researchData.topicIdeas.length === 0} className="px-8 py-3 bg-orange-500 text-black font-bold rounded-lg hover:bg-orange-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed">Continue to Scripts →</button>
      </div>
    </div>
  );

  const renderScriptWriting = () => (
    <div className="space-y-8">
      <div className="border-b border-neutral-800 pb-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold text-orange-500">Script Writing</h2>
          <p className="text-neutral-400 mt-2">Convert top ideas into cue-card scripts</p>
        </div>
        <button onClick={generateMockScripts} disabled={isLoading} className="px-6 py-3 bg-orange-500 text-black font-bold rounded-lg hover:bg-orange-400 transition-all disabled:opacity-50">
          {isLoading ? "Generating..." : "✍️ Generate 8 Scripts"}
        </button>
      </div>

      {isLoading ? <LoadingSpinner /> : scripts.length > 0 ? (
        <div className="space-y-4">
          {scripts.map((script, idx) => (
            <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
              <div className="bg-neutral-800/50 px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold text-sm">{script.id}</span>
                  <h4 className="font-bold text-white">{script.title}</h4>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-500 rounded-full text-xs">{script.archetype}</span>
                  <span className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-xs">{script.duration}</span>
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                  <span className="text-xs text-orange-500 font-medium uppercase tracking-wider">Hook (2 sec)</span>
                  <p className="text-white font-bold text-lg mt-1">"{script.hook}"</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-neutral-800/50 rounded-lg p-4">
                    <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Setup</span>
                    <p className="text-neutral-300 text-sm mt-1">{script.setup}</p>
                  </div>
                  <div className="bg-neutral-800/50 rounded-lg p-4">
                    <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Payoff</span>
                    <p className="text-neutral-300 text-sm mt-1">{script.payoff}</p>
                  </div>
                  <div className="bg-neutral-800/50 rounded-lg p-4">
                    <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">CTA</span>
                    <p className="text-neutral-300 text-sm mt-1">{script.cta}</p>
                  </div>
                </div>
                <div className="bg-neutral-800/30 rounded-lg p-3 border border-neutral-800">
                  <span className="text-xs text-neutral-500 font-medium uppercase tracking-wider">Visual Notes</span>
                  <p className="text-neutral-400 text-sm mt-1">{script.visualNotes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border-2 border-dashed border-neutral-800 rounded-xl">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-xl font-bold text-white mb-2">No Scripts Generated Yet</h3>
          <p className="text-neutral-500">Click "Generate Scripts" to create cue-card scripts.</p>
        </div>
      )}

      <div className="flex justify-between pt-6 border-t border-neutral-800">
        <button onClick={() => setCurrentStep(1)} className="px-6 py-3 bg-neutral-900 text-neutral-300 font-medium rounded-lg hover:bg-neutral-800 transition-all">← Back</button>
        <button onClick={() => setCurrentStep(3)} disabled={scripts.length === 0} className="px-8 py-3 bg-orange-500 text-black font-bold rounded-lg hover:bg-orange-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed">Continue to Filming →</button>
      </div>
    </div>
  );

  const renderFilmingGuide = () => (
    <div className="space-y-8">
      <div className="border-b border-neutral-800 pb-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold text-orange-500">Filming Guide</h2>
          <p className="text-neutral-400 mt-2">Shot lists, locations, props, and filming order</p>
        </div>
        <button onClick={generateMockFilmingGuide} disabled={isLoading || scripts.length === 0} className="px-6 py-3 bg-orange-500 text-black font-bold rounded-lg hover:bg-orange-400 transition-all disabled:opacity-50">
          {isLoading ? "Generating..." : "🎬 Generate Filming Guide"}
        </button>
      </div>

      {isLoading ? <LoadingSpinner /> : filmingGuide.filmingOrder?.length > 0 ? (
        <div className="space-y-8">
          {/* Filming Order */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">📋 Filming Order (2-3 hr shoot)</h3>
            <div className="space-y-3">
              {filmingGuide.filmingOrder.map((batch, idx) => (
                <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold text-lg">{batch.batch}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white">{batch.location}</h4>
                    <p className="text-neutral-400 text-sm">Scripts: {Array.isArray(batch.scripts) ? batch.scripts.join(", ") : batch.scripts}</p>
                  </div>
                  <span className="px-4 py-2 bg-neutral-800 rounded-lg text-neutral-300 text-sm">{batch.estimatedTime}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">📍 Locations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filmingGuide.locations?.map((loc, idx) => (
                <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                  <h4 className="font-bold text-white mb-2">{loc.name}</h4>
                  <p className="text-neutral-400 text-sm mb-3">{loc.setupNotes}</p>
                  <div className="flex flex-wrap gap-1">
                    {loc.scripts?.map(s => <span key={s} className="px-2 py-1 bg-orange-500/20 text-orange-500 rounded text-xs">#{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Props */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">🎯 Props Checklist</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {filmingGuide.props?.map((prop, idx) => (
                <div key={idx} className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 flex items-start gap-3">
                  <span className="text-xl">☐</span>
                  <div>
                    <h4 className="font-medium text-white">{prop.item}</h4>
                    <p className="text-neutral-500 text-sm">{prop.purpose}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* B-Roll */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">🎥 Generic B-Roll Shots</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {filmingGuide.genericBRoll?.map((shot, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3">
                  <span className="text-orange-500">▶</span>
                  <span className="text-neutral-300 text-sm">{shot}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 border-2 border-dashed border-neutral-800 rounded-xl">
          <div className="text-6xl mb-4">🎬</div>
          <h3 className="text-xl font-bold text-white mb-2">No Filming Guide Yet</h3>
          <p className="text-neutral-500">Generate scripts first, then click "Generate Filming Guide".</p>
        </div>
      )}

      <div className="flex justify-between pt-6 border-t border-neutral-800">
        <button onClick={() => setCurrentStep(2)} className="px-6 py-3 bg-neutral-900 text-neutral-300 font-medium rounded-lg hover:bg-neutral-800 transition-all">← Back</button>
        <button onClick={() => setCurrentStep(4)} disabled={filmingGuide.filmingOrder?.length === 0} className="px-8 py-3 bg-orange-500 text-black font-bold rounded-lg hover:bg-orange-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed">Continue to Calendar →</button>
      </div>
    </div>
  );

  const renderCalendarisation = () => (
    <div className="space-y-8">
      <div className="border-b border-neutral-800 pb-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-3xl font-bold text-orange-500">Content Calendar</h2>
          <p className="text-neutral-400 mt-2">4-week posting schedule</p>
        </div>
        <button onClick={generateMockCalendar} disabled={isLoading || scripts.length === 0} className="px-6 py-3 bg-orange-500 text-black font-bold rounded-lg hover:bg-orange-400 transition-all disabled:opacity-50">
          {isLoading ? "Generating..." : "📅 Generate Calendar"}
        </button>
      </div>

      {isLoading ? <LoadingSpinner /> : calendar.length > 0 ? (
        <div className="space-y-6">
          {calendar.map((week, weekIdx) => (
            <div key={weekIdx} className="bg-neutral-900/30 border border-neutral-800 rounded-xl overflow-hidden">
              <div className="bg-neutral-800/50 px-5 py-3 border-b border-neutral-800">
                <h3 className="font-bold text-orange-500">Week {week.week}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800">
                {week.days?.map((day, dayIdx) => (
                  <div key={dayIdx} className="bg-neutral-950 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">{day.day}</span>
                      <span className="text-neutral-500 text-xs">{day.postingTime}</span>
                    </div>
                    <div className={`rounded-lg p-3 border ${day.contentType === "Pain" || day.contentType === "Proof" ? "bg-red-500/10 border-red-500/30" : day.contentType === "Authority" ? "bg-blue-500/10 border-blue-500/30" : day.contentType === "Story" ? "bg-purple-500/10 border-purple-500/30" : "bg-green-500/10 border-green-500/30"}`}>
                      <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">{day.contentType}</span>
                      <p className="text-white font-medium text-sm mt-1">{day.scriptTitle}</p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {day.platforms?.map(p => <span key={p} className="px-2 py-1 bg-neutral-900 rounded text-xs text-neutral-400">{p}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 border-2 border-dashed border-neutral-800 rounded-xl">
          <div className="text-6xl mb-4">📅</div>
          <h3 className="text-xl font-bold text-white mb-2">No Calendar Yet</h3>
          <p className="text-neutral-500">Generate scripts first, then click "Generate Calendar".</p>
        </div>
      )}

      <div className="flex justify-between pt-6 border-t border-neutral-800">
        <button onClick={() => setCurrentStep(3)} className="px-6 py-3 bg-neutral-900 text-neutral-300 font-medium rounded-lg hover:bg-neutral-800 transition-all">← Back</button>
        <button onClick={() => setCurrentStep(5)} disabled={calendar.length === 0} className="px-8 py-3 bg-orange-500 text-black font-bold rounded-lg hover:bg-orange-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed">Continue to Export →</button>
      </div>
    </div>
  );

  const renderExport = () => (
    <div className="space-y-8">
      <div className="border-b border-neutral-800 pb-6">
        <h2 className="text-3xl font-bold text-orange-500">Export & Launch</h2>
        <p className="text-neutral-400 mt-2">Download your complete content pack</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 text-center">
          <div className="text-4xl font-bold text-orange-500">{researchData.hookBank.length}</div>
          <div className="text-neutral-400 text-sm mt-1">Hooks</div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center">
          <div className="text-4xl font-bold text-white">{researchData.topicIdeas.length}</div>
          <div className="text-neutral-400 text-sm mt-1">Topic Ideas</div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center">
          <div className="text-4xl font-bold text-white">{scripts.length}</div>
          <div className="text-neutral-400 text-sm mt-1">Scripts</div>
        </div>
        <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 text-center">
          <div className="text-4xl font-bold text-orange-500">{calendar.length * 4}</div>
          <div className="text-neutral-400 text-sm mt-1">Scheduled Posts</div>
        </div>
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
        <h3 className="text-xl font-bold text-orange-500 mb-4">📦 Export Options</h3>
        <p className="text-neutral-400 mb-4">In the full version, you can download everything as JSON, CSV, or PDF.</p>
        <button 
          onClick={() => {
            const data = { businessProfile, websiteData, researchData, scripts, filmingGuide, calendar };
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "veblen-launch-demo-export.json";
            a.click();
          }}
          className="px-6 py-3 bg-orange-500 text-black font-bold rounded-lg hover:bg-orange-400 transition-all"
        >
          Download Demo Export (JSON)
        </button>
      </div>

      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
        <h3 className="text-xl font-bold text-green-400 mb-2">🎉 Demo Complete!</h3>
        <p className="text-neutral-300">You've experienced the full Veblen Launch workflow. In production, this would connect to Claude AI for real content generation based on actual website analysis.</p>
      </div>

      <div className="flex justify-start pt-6 border-t border-neutral-800">
        <button onClick={() => setCurrentStep(4)} className="px-6 py-3 bg-neutral-900 text-neutral-300 font-medium rounded-lg hover:bg-neutral-800 transition-all">← Back</button>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0: return renderBusinessProfile();
      case 1: return renderResearch();
      case 2: return renderScriptWriting();
      case 3: return renderFilmingGuide();
      case 4: return renderCalendarisation();
      case 5: return renderExport();
      default: return renderBusinessProfile();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className={`${showSidebar ? "w-72" : "w-0"} flex-shrink-0 bg-neutral-950 border-r border-neutral-800 transition-all duration-300 overflow-hidden`}>
          <div className="p-6">
            <div className="mb-8">
              <h1 className="text-2xl font-black tracking-tight">
                <span className="text-orange-500">VEBLEN</span>
                <span className="text-neutral-500 font-light ml-2">Launch</span>
              </h1>
              <p className="text-neutral-500 text-xs mt-1">Demo Mode</p>
            </div>
            <div className="space-y-2">
              {workflowSteps.map((step) => (
                <StepIndicator
                  key={step.id}
                  step={step}
                  isActive={currentStep === step.id}
                  isComplete={
                    (step.id === 0 && businessProfile.businessName) ||
                    (step.id === 1 && researchData.hookBank.length > 0) ||
                    (step.id === 2 && scripts.length > 0) ||
                    (step.id === 3 && filmingGuide.filmingOrder?.length > 0) ||
                    (step.id === 4 && calendar.length > 0)
                  }
                />
              ))}
            </div>
          </div>
        </aside>
        
        {/* Main */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            <button onClick={() => setShowSidebar(!showSidebar)} className="mb-6 lg:hidden px-4 py-2 bg-neutral-900 rounded-lg text-neutral-400">{showSidebar ? "← Hide" : "☰ Menu"}</button>
            {renderCurrentStep()}
          </div>
        </main>
      </div>
    </div>
  );
}
