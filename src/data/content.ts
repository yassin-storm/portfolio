import { Project, SkillCategory, ExperienceItem, EducationItem, CertificateItem, ServiceItem } from './types';

export const personalInfo = {
  name: {
    en: 'Yassin Karem',
    ar: 'ياسين كارم',
  },
  legalName: 'Yassin Farouk Karem',
  title: {
    en: 'Full-Stack & MERN Developer | Creative Backend Architect',
    ar: 'مطور واجهات وخوادم شامل | مهندس برمجيات ونظم خلفية MERN',
  },
  location: {
    en: 'Minia, Egypt',
    ar: 'المنيا، مصر',
  },
  email: 'yasseenkarem747@gmail.com',
  phone: '+20 109 012 8750',
  linkedin: 'https://www.linkedin.com/in/yassin-karem-44559a352',
  github: 'https://github.com/yassinStrom',
  cvUrl: '/Yassin_Farouk_CV.pdf',
  bio: {
    en: 'MERN Stack Developer & Software Engineer passionate about building secure, resilient backend architectures, scalable RESTful APIs, and modern responsive web applications. Senior year student in Faculty of Computers & Artificial Intelligence (AI Major). Academic Instructor and Mentor at AFAQ Training Center, guiding students and developers in software engineering.',
    ar: 'مطور MERN مهندس برمجيات متخصص في بناء معمارية الأنظمة الخلفية السحابية، وتصميم واجهات برمجة التطبيقات RESTful عالية الكفاءة والأمان، مع خبرة عملية في دمج بوابات الدفع والمعالجة الخلفية للبيانات. طالب بالسنة النهائية بكلية الحاسبات والمعلومات قسم ذكاء اصطناعي، ومحاضر وموجه أكاديمي بمركز آفاق لتدريب وتأهيل الكوادر البرمجية.',
  },
  philosophy: {
    en: 'Crafting reliable software is not just about writing clean code—it is about designing resilient architecture, proactive error boundaries, zero-trust security, and delighting users with crisp responsiveness and purpose.',
    ar: 'بناء البرمجيات الموثوقة لا يقتصر على كتابة كود نظيف فقط، بل يمتد إلى تصميم معمارية مرنة، وحماية استباقية للأمان، وتجربة مستخدم تفاعلية فائقة السرعة والدقة.',
  },
};

export const projectsData: Project[] = [
  {
    id: 'yassin-agency',
    title: {
      en: 'YASSIN AGENCY — Digital Agency Full-Stack Platform',
      ar: 'منصة وكالة ياسين للحلول الرقمية المتكاملة',
    },
    category: {
      en: 'Full-Stack Platform / SaaS',
      ar: 'منصة سحابية متكاملة / SaaS',
    },
    shortDesc: {
      en: 'Comprehensive digital agency platform featuring public website, client management portal, and full admin dashboard for orders, milestones, and billing.',
      ar: 'منصة متكاملة لوكالة رقمية تضم موقعاً عاماً وبوابة عملاء لمتابعة مراحل المشاريع ولوحة تحكم إدارية شاملة للعقود والدفعات.',
    },
    fullDesc: {
      en: 'Architected and built an end-to-end agency management ecosystem. Combines a public-facing website, customer portal with project tracking (Request → Design → Development → Delivery), direct client messaging, and an administrative hub with revenue analytics and custom service packages.',
      ar: 'تم تصميم وتطوير نظام بيئي كامل لإدارة الوكالة الرقمية، يشمل موقعاً عاماً جذاباً، وبوابة عملاء تفاعلية لمتابعة حالات المشاريع لحظياً، ونظام تواصل مباشر، ولوحة تحكم تنفيذية مع إحصائيات مالية وإدارة شاملة للخدمات.',
    },
    problem: {
      en: 'Digital agencies struggle with scattered client communication, unorganized milestone handovers, and delayed payments across disconnected channels.',
      ar: 'صعوبة تنظيم تدفق تسليم المشاريع للعملاء وتشتت التواصل بين البريد وتطبيقات المراسلة والتأخر في تحصيل الدفعات المالية.',
    },
    solution: {
      en: 'Engineered a centralized 3-pillar MERN platform: Public landing page, Customer Portal with milestone tracking & invoice statuses, and Admin command center.',
      ar: 'هندسة منصة MERN مركزية ثلاثية الأركان: واجهة عامة، بوابة عملاء ذكية لمتابعة المراحل والفواتير، ولوحة تحكم لإدارة الفريق والإيرادات.',
    },
    keyFeatures: [
      {
        en: 'Multi-role RBAC: Admin, Project Managers, and Verified Customers',
        ar: 'نظام صلاحيات متقدم (RBAC) للإدارة ومديري المشاريع والعملاء',
      },
      {
        en: 'End-to-end project milestone tracking (Pending, In Progress, Review, Completed)',
        ar: 'متابعة دورة حياة المشاريع خطوة بخطوة من الطلب حتى التسليم النهائي',
      },
      {
        en: 'Secure JWT authentication with HTTP-only cookies & password hashing',
        ar: 'نظام أمان صارم يعتمد على JWT وكوكيز مشفرة ومحمية من XSS/CSRF',
      },
      {
        en: 'Granular rate-limiting, Helmet headers, and input sanitization',
        ar: 'حماية متقدمة من هجمات DDoS مع تحديد معدل الطلبات وحماية الرؤوس وتطهير المدخلات',
      },
    ],
    technologies: ['React 18', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'REST API'],
    status: 'completed',
    image: '/images/yassin-agency.png',
    githubUrl: 'https://github.com/yassinStrom',
  },
  {
    id: 'star-maker',
    title: {
      en: 'Star Maker — Talent & Agency Ecosystem',
      ar: 'منصة ستار ميكر لإدارة واكتشاف المواهب',
    },
    category: {
      en: 'Backend Architecture / Production',
      ar: 'معمارية النظم الخلفية / إنتاج فعلي',
    },
    shortDesc: {
      en: 'Lead backend developer architecting high-concurrency Node.js RESTful APIs, asynchronous queue processing, and real-time operations.',
      ar: 'المطور الرئيسي للأنظمة الخلفية لتصميم وهندسة واجهات RESTful عالية التحمل ومعالجة المهام الخلفية.',
    },
    fullDesc: {
      en: 'Led the backend engineering for the Star Maker ecosystem. Designed database schemas, implemented secure role-based authentication, integrated 3rd party services, engineered asynchronous background workers, and conducted extensive load profiling.',
      ar: 'قيادة هندسة وتطوير الأنظمة الخلفية لمنصة Star Maker؛ تصميم قواعد البيانات المتقدمة، تأمين الصلاحيات، دمج الخدمات الخارجية، وتطوير معالجات خلفية للمهام الثقيلة مع اختبارات أداء دورية.',
    },
    problem: {
      en: 'Handling peak traffic and asynchronous user activity without degrading API latency or database throughput.',
      ar: 'التعامل مع ذروة الزيارات والأنشطة المتزامنة للمستخدمين دون التأثير على سرعة استجابة الخوادم أو أداء قواعد البيانات.',
    },
    solution: {
      en: 'Structured clean layered MVC architecture with Express, indexing strategies on MongoDB, background task dispatching, and optimized response payloads.',
      ar: 'بناء معمارية طبقية نظيفة مع فهارس مخصصة في MongoDB وتقسيم مهام المعالجة الخلفية لتقليص زمن الاستجابة إلى أقصى حد.',
    },
    keyFeatures: [
      {
        en: 'Scalable RESTful API architecture with decoupled business logic',
        ar: 'بنية واجهات برمجية قياسية مفصولة ومنظمة تضمن سهولة التوسع المستقبلي',
      },
      {
        en: 'Background task processing for resource-heavy operations',
        ar: 'معالجة خلفية غير متزامنة للعمليات ذات الاستهلاك العالي للموارد',
      },
      {
        en: 'Automated integration & unit test suites with CI/CD',
        ar: 'حزم اختبارات تكاملية ووحدية شاملة مدمجة مع خطوط النشر الآلي CI/CD',
      },
      {
        en: 'Zero-trust JWT authentication and granular permissions',
        ar: 'نظام توثيق رقمي منعدم الثقة (Zero-trust) مع صلاحيات دقيقة ومشددة',
      },
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs', 'Unit Testing', 'CI/CD'],
    status: 'completed',
    image: '/images/programming.png',
  },
  {
    id: 'ecommerce-engine',
    title: {
      en: 'High-Performance E-Commerce API Engine',
      ar: 'محرك التجارة الإلكترونية عالي الأداء',
    },
    category: {
      en: 'Enterprise E-Commerce / Fintech',
      ar: 'تجارة إلكترونية متقدمة / بوابات دفع',
    },
    shortDesc: {
      en: 'Comprehensive e-commerce backend with product catalog, cart workflows, multi-step checkout, webhook handling, and payment gateway integration.',
      ar: 'نواة برمجية خلفية متطورة للمتاجر الإلكترونية مع إدارة الكتالوج والسلة وربط بوابات الدفع ومعالجة خطافات الويب (Webhooks).',
    },
    fullDesc: {
      en: 'Engineered a production-ready e-commerce core with atomic cart operations, inventory tracking, order status state machine, payment gateway webhooks, and centralized logging. Earned a 97.8/100 capstone grade.',
      ar: 'تطوير نواة متكاملة للمتاجر الإلكترونية تدعم العمليات الحسابية الذرية للسلة، وإدارة المخزون، وتتبع حالات الطلبات، واستقبال إشعارات بوابات الدفع عبر Webhooks مع تسجيل مركزي للأخطاء. حصل المشروع على درجة امتياز 97.8/100.',
    },
    problem: {
      en: 'Inventory race conditions during concurrent checkouts and vulnerabilities in payment webhook handling.',
      ar: 'مشاكل تضارب المخزون أثناء الطلبات المتزامنة وتأمين التحقق من إشعارات دفع العمليات المالية.',
    },
    solution: {
      en: 'Engineered transactional checks, cryptographic webhook signature validation, idempotency keys, and indexed query optimizations.',
      ar: 'بناء عمليات تحقق مالية مشفرة للـ Webhooks، واستخدام مفاتيح منع التكرار (Idempotency)، وفهارس قواعد بيانات لتحسين أوقات الاستجابة.',
    },
    keyFeatures: [
      {
        en: 'Product catalog with multi-tier categorization, search & filtering',
        ar: 'كتالوج منتجات متقدم مع تصفية متعددة المستويات وبحث فوري',
      },
      {
        en: 'Persistent & session cart synchronization with stock validation',
        ar: 'مزامنة السلة مع الجلسات والتحقق اللحظي من توفر الكميات',
      },
      {
        en: 'Secure payment gateway integration with cryptographic webhook validation',
        ar: 'ربط بوابات دفع إلكترونية مع التحقق المشفر من توقيع الإشعارات',
      },
      {
        en: 'Centralized error tracking, sanitization, and structured audit logs',
        ar: 'نظام تسجيل مركزي للأخطاء وتدقيق العمليات مع تطهير كامل للبيانات',
      },
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Payment Gateways', 'Webhooks', 'Bcrypt', 'Jest'],
    status: 'completed',
    image: '/images/programming.png',
  },
  {
    id: 'afaq-platform',
    title: {
      en: 'AFAQ Educational & Training Management Platform',
      ar: 'منصة آفاق للتدريب وإدارة المراكز التعليمية',
    },
    category: {
      en: 'EdTech / Management System',
      ar: 'منظومة تعليمية ذكية / EdTech',
    },
    shortDesc: {
      en: 'Centralized portal for managing courses, student enrollments, exam grading, and automated certificate generation.',
      ar: 'منصة مركزية لإدارة الدورات، وتسجيل الطلاب، ورصد نتائج الاختبارات وإصدار الشهادات المعتمدة آلياً.',
    },
    fullDesc: {
      en: 'Developed for educational training centers to streamline instructor workflows, course curricula, student records, and automated certification pipelines with verifiable credentials.',
      ar: 'طُوّرت خصيصاً للمراكز التدريبية لتسهيل عمل المحاضرين، وإدارة المناهج الدراسية، وحفظ سجلات الطلاب، وأتمتة استخراج شهادات إتمام التدريب بروابط تحقق موثوقة.',
    },
    problem: {
      en: 'Manual tracking of trainee progress and cumbersome certificate design and delivery.',
      ar: 'المتابعة اليدوية المتعبة لتقدم المتدربين والوقت المستغرق في إعداد وتوزيع شهادات الحضور والاجتياز.',
    },
    solution: {
      en: 'Engineered an automated course workflow with student dashboards, score calculation, and digital verification codes.',
      ar: 'بناء تدفق تدريبي مؤتمت مع لوحة تحكم للطالب، وحساب تلقائي للدرجات، وأكواد تحقق رقمية فريدة.',
    },
    keyFeatures: [
      {
        en: 'Course curriculum management with assignment submission tracking',
        ar: 'إدارة شاملة للمناهج الدراسية وتسليم التكليفات والواجبات',
      },
      {
        en: 'Instructor admin dashboard for grading and student performance',
        ar: 'لوحة تحكم للمدربين لرصد الدرجات ومتابعة مؤشرات أداء المتدربين',
      },
      {
        en: 'Digital certificate generation with verification metadata',
        ar: 'إصدار تلقائي للشهادات الرقمية مع معرفات فريدة للتحقق من صحتها',
      },
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Render Cloud'],
    status: 'completed',
    image: '/images/programming.png',
  },
];

export const skillsData: SkillCategory[] = [
  {
    id: 'backend',
    title: {
      en: 'Backend Architecture & APIs',
      ar: 'هندسة النظم الخلفية والـ APIs',
    },
    skills: [
      { name: 'Node.js', level: { en: 'Expert / Production', ar: 'خبير / إنتاج فعلي' } },
      { name: 'Express.js', level: { en: 'Expert / Production', ar: 'خبير / إنتاج فعلي' } },
      { name: 'RESTful API Design', level: { en: 'Expert / Production', ar: 'خبير / إنتاج فعلي' } },
      { name: 'JWT & Authentication', level: { en: 'Expert / Production', ar: 'خبير / أمان عالي' } },
      { name: 'Payment Gateways & Webhooks', level: { en: 'Experienced', ar: 'خبرة متقدمة' } },
      { name: 'Background Jobs & Queues', level: { en: 'Experienced', ar: 'خبرة متقدمة' } },
      { name: 'Python', level: { en: 'Proficient', ar: 'إتقان متقدم' } },
      { name: 'C#', level: { en: 'Experienced', ar: 'خبرة عملية' } },
    ],
  },
  {
    id: 'frontend',
    title: {
      en: 'Frontend & Creative UI',
      ar: 'تطوير الواجهات وتجارب الاستخدام',
    },
    skills: [
      { name: 'React 18 / Next.js', level: { en: 'Advanced', ar: 'مستوى متقدم' } },
      { name: 'TypeScript & JavaScript (ES6+)', level: { en: 'Expert / Production', ar: 'خبير / إنتاج فعلي' } },
      { name: 'Tailwind CSS', level: { en: 'Expert / Production', ar: 'خبير / إنتاج فعلي' } },
      { name: 'GSAP & ScrollTrigger', level: { en: 'Advanced Animations', ar: 'تحريك وتفاعل متقدم' } },
      { name: 'Bilingual RTL / LTR Architecture', level: { en: 'Specialist', ar: 'تخصص معمارية ثنائية اللغة' } },
      { name: 'Responsive Web Design', level: { en: 'Expert / Pixel-Perfect', ar: 'تصميم فائق الدقة والاستجابة' } },
    ],
  },
  {
    id: 'databases',
    title: {
      en: 'Databases & Data Modeling',
      ar: 'قواعد البيانات ونمذجة البيانات',
    },
    skills: [
      { name: 'MongoDB & Mongoose ODM', level: { en: 'Expert / Production', ar: 'خبير / إنتاج فعلي' } },
      { name: 'NoSQL Schema Design', level: { en: 'Expert / Production', ar: 'خبير / تصميم هياكل مرنة' } },
      { name: 'Indexing & Performance Tuning', level: { en: 'Advanced', ar: 'تحسين الفهارس وسرعة الاستعلام' } },
      { name: 'SQL & Relational Concepts', level: { en: 'Experienced', ar: 'خبرة عملية' } },
    ],
  },
  {
    id: 'devops',
    title: {
      en: 'DevOps, Testing & Quality',
      ar: 'أدوات التطوير والجودة والـ DevOps',
    },
    skills: [
      { name: 'Git & GitHub Collaboration', level: { en: 'Expert', ar: 'إتقان تام' } },
      { name: 'Unit & Integration Testing (Jest)', level: { en: 'Experienced', ar: 'اختبارات برمجية شاملة' } },
      { name: 'CI/CD Pipelines', level: { en: 'Experienced', ar: 'خطوط نشر آلي' } },
      { name: 'Postman & API Documentation', level: { en: 'Expert', ar: 'توثيق واختبار الـ APIs' } },
      { name: 'Vercel & Cloud Deployment', level: { en: 'Production Ready', ar: 'جاهزية للنشر السحابي' } },
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'star-maker-exp',
    role: {
      en: 'Lead Backend Developer',
      ar: 'المطور الرئيسي للأنظمة الخلفية',
    },
    company: {
      en: 'Star Maker Project (Freelance)',
      ar: 'مشروع ستار ميكر (عمل حر)',
    },
    location: {
      en: 'Minia, Egypt',
      ar: 'المنيا، مصر',
    },
    period: {
      en: 'Oct 2024 — Present',
      ar: 'أكتوبر 2024 — حتى الآن',
    },
    type: {
      en: 'Freelance / Contract',
      ar: 'عمل حر / تعاقدي',
    },
    achievements: [
      {
        en: 'Architected and built the entire core backend utilizing Node.js, Express, and MongoDB.',
        ar: 'تصميم وهندسة النظام الخلفي بالكامل باستخدام Node.js و Express و MongoDB.',
      },
      {
        en: 'Designed RESTful APIs, relational data models, and zero-trust authentication flows.',
        ar: 'تصميم الـ APIs ونماذج البيانات مع توثيق آمن متعدد المستويات.',
      },
      {
        en: 'Authored unit/integration tests and optimized queries to improve API latency and system uptime.',
        ar: 'كتابة اختبارات تكاملية وتحسين استعلامات قواعد البيانات لرفع سرعة الاستجابة وكفاءة التشغيل.',
      },
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs', 'Postman'],
  },
  {
    id: 'ecommerce-freelance',
    role: {
      en: 'Backend & API Engineer',
      ar: 'مهندس نظم خلفية وواجهات برمجية',
    },
    company: {
      en: 'E-commerce Solutions (Freelance)',
      ar: 'حلول التجارة الإلكترونية (عمل حر)',
    },
    location: {
      en: 'Remote',
      ar: 'عن بُعد',
    },
    period: {
      en: 'Jan 2025 — Apr 2025',
      ar: 'يناير 2025 — أبريل 2025',
    },
    type: {
      en: 'Freelance',
      ar: 'عمل حر',
    },
    achievements: [
      {
        en: 'Engineered scalable CRUD endpoints for catalog, customer accounts, and atomic cart operations.',
        ar: 'تطوير نهايات برمجية قابلة للتوسع لإدارة الكتالوج، وحسابات العملاء، وعمليات السلة.',
      },
      {
        en: 'Integrated payment processing webhooks and secure transactional flows with zero duplicate charges.',
        ar: 'دمج معالجات الدفع الإلكتروني وخطافات الويب (Webhooks) مع حماية ضد تكرار المعاملات.',
      },
      {
        en: 'Implemented centralized logging and error handling, significantly reducing production issue resolution time.',
        ar: 'تطبيق نظام مركزي لرصد الأخطاء ومعالجة الاستثناءات مما قلص وقت تصحيح المشاكل الإنتاجية.',
      },
    ],
    technologies: ['Node.js', 'Express', 'MongoDB', 'Payment Gateways', 'Webhooks', 'REST APIs'],
  },
  {
    id: 'afaq-instructor',
    role: {
      en: 'Academic Instructor & Mentor',
      ar: 'محاضر وموجه أكاديمي',
    },
    company: {
      en: 'AFAQ Training Center',
      ar: 'مركز آفاق للتدريب والاستشارات',
    },
    location: {
      en: 'Minia, Egypt',
      ar: 'المنيا، مصر',
    },
    period: {
      en: 'Ongoing',
      ar: 'مستمر',
    },
    type: {
      en: 'Academic & Professional Instruction',
      ar: 'تدريب وتعليم أكاديمي',
    },
    achievements: [
      {
        en: 'Delivering technical lectures, coding labs, and mentoring students in backend engineering, database architectures, and web development fundamentals.',
        ar: 'تدريب وشرح المقررات البرمجية وهندسة الخوادم وهياكل البيانات وقواعد البيانات لطلاب وخريجي التكنولوجيا.',
      },
      {
        en: 'Guiding developer teams through software project architecture, real-world deployment practices, and API standards.',
        ar: 'توجيه الفرق البرمجية في تصميم المعمارية لمشاريعهم واختيار أفضل ممارسات كتابة الـ APIs والنشر السحابي.',
      },
    ],
    technologies: ['Node.js', 'Express', 'Databases', 'Algorithms', 'Mentorship', 'Web Development'],
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'fcai-degree',
    degree: {
      en: 'Bachelor of Computers & Artificial Intelligence (AI Department)',
      ar: 'بكالوريوس الحاسبات والمعلومات — قسم الذكاء الاصطناعي',
    },
    institution: {
      en: 'Faculty of Computers and Artificial Intelligence',
      ar: 'كلية الحاسبات والمعلومات والذكاء الاصطناعي',
    },
    period: {
      en: 'Final Year / Graduation Class',
      ar: 'السنة النهائية (سنة التخرج)',
    },
    location: {
      en: 'Minia, Egypt',
      ar: 'المنيا، مصر',
    },
    details: [
      {
        en: 'Currently in the final senior year (AI Major) with continuous high academic distinction.',
        ar: 'في السنة النهائية حالياً (قسم ذكاء اصطناعي) مع تفوق أكاديمي متميز.',
      },
      {
        en: 'Specializing in intelligent computing, algorithmic problem solving, software engineering, and distributed systems.',
        ar: 'تخصص في الأنظمة الذكية، وهندسة البرمجيات، وحل المشكلات الحسابية، وتصميم الخوارزميات.',
      },
    ],
  },
  {
    id: 'sef-academy',
    degree: {
      en: 'Intensive Backend Engineering Diploma',
      ar: 'دبلومة هندسة وتطوير النظم الخلفية المكثفة',
    },
    institution: {
      en: 'SEF Academy',
      ar: 'أكاديمية SEF',
    },
    period: {
      en: '2026',
      ar: '2026',
    },
    location: {
      en: 'Online',
      ar: 'عبر الإنترنت',
    },
    grade: '97.8 / 100',
    details: [
      {
        en: 'Rigorous specialization in Node.js, Express, RESTful architecture, MongoDB schemas, JWT security, unit testing, and deployment.',
        ar: 'تخصص متعمق في Node.js، Express، وهندسة واجهات RESTful، وتأمين JWT، وتصميم قواعد البيانات والاختبارات البرمجية.',
      },
      {
        en: 'Graduated with high honors (97.8/100) after presenting a comprehensive production-grade e-commerce backend platform.',
        ar: 'التخرج بمرتبة الشرف بمعدل (97.8/100) عن مشروع تخرج متكامل لمحرك تجارة إلكترونية متقدم.',
      },
    ],
  },
];

export const certificatesData: CertificateItem[] = [
  {
    id: 'cert-sef-backend',
    title: {
      en: 'Professional Backend Development Diploma (97.8/100)',
      ar: 'دبلومة تطوير وهندسة الأنظمة الخلفية الاحترافية (97.8/100)',
    },
    issuer: {
      en: 'SEF Academy',
      ar: 'أكاديمية SEF',
    },
    date: '2026',
    credentialId: 'SEF-BE-2026-978',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'JWT Security', 'Payment Integration', 'Jest'],
  },
  {
    id: 'cert-icdl',
    title: {
      en: 'International Computer Driving Licence (ICDL)',
      ar: 'الرخصة الدولية لقيادة الحاسب الآلي (ICDL)',
    },
    issuer: {
      en: 'ICDL Official Foundation',
      ar: 'مؤسسة ICDL الدولية',
    },
    date: 'Certified',
    skills: ['Computer Essentials', 'Data Management', 'Information Literacy'],
  },
  {
    id: 'cert-afaq',
    title: {
      en: 'Technical Instructor & Training Excellence',
      ar: 'شهادة التميز في التدريب التقني',
    },
    issuer: {
      en: 'AFAQ Training & Consulting Center',
      ar: 'مركز آفاق للتدريب والاستشارات',
    },
    date: '2026',
    skills: ['Technical Training', 'Mentorship', 'Curriculum Delivery'],
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'backend-architecture',
    title: {
      en: 'Backend Architecture & Custom APIs',
      ar: 'هندسة الأنظمة الخلفية وواجهات الـ APIs المخصصة',
    },
    description: {
      en: 'Design and implementation of fast, secure, and fault-tolerant RESTful microservices and monoliths with Express, Node.js, and MongoDB.',
      ar: 'تصميم وتنفيذ أنظمة خلفية عالية الأداء ومحصنة أمنياً باستخدام Node.js و Express و MongoDB مع حماية كاملة للبيانات.',
    },
    features: [
      { en: 'Custom RESTful API endpoints', ar: 'بناء واجهات برمجية مخصصة وعالية السرعة' },
      { en: 'Stateless JWT & session authentication', ar: 'أنظمة تسجيل دخول وتوثيق متقدمة ومشفرة' },
      { en: 'Rate limiting, DDoS shield & helmet protection', ar: 'حماية متقدمة ضد هجمات DDoS واختراق البيانات' },
      { en: 'Comprehensive Postman documentation', ar: 'توثيق قياسي وشامل لجميع الواجهات في Postman' },
    ],
    icon: 'Server',
  },
  {
    id: 'fullstack-web',
    title: {
      en: 'Full-Stack Web Applications (MERN)',
      ar: 'تطوير تطبيقات الويب المتكاملة (MERN Stack)',
    },
    description: {
      en: 'End-to-end web apps crafted with modern React / Next.js frontends connected cleanly to robust Node.js backends.',
      ar: 'تطوير حلول ومنصات ويب تفاعلية من الصفر تجمع بين واجهات React/Next.js العصرية وأنظمة خلفية مستقرة.',
    },
    features: [
      { en: 'Dynamic dashboards & admin portals', ar: 'لوحات تحكم تفاعلية لإدارة الأعمال والمستخدمين' },
      { en: 'Real-time state and optimistic UI', ar: 'استجابة فائقة السرعة وتحديث لحظي للبيانات' },
      { en: 'Full Arabic & English bilingual support', ar: 'دعم كامل ومتقن للغتين العربية والإنجليزية' },
      { en: 'Vercel, Render & cloud continuous deployment', ar: 'ربط خطوط النشر الآلي والاستضافة السحابية' },
    ],
    icon: 'Layout',
  },
  {
    id: 'payment-integration',
    title: {
      en: 'Payment Gateway & Webhook Integration',
      ar: 'دمج بوابات الدفع الإلكتروني والـ Webhooks',
    },
    description: {
      en: 'Seamless integration of online payment providers, subscription workflows, cryptographic signature verification, and automated billing notifications.',
      ar: 'ربط بوابات الدفع الإلكتروني المختلفة والاشتراكات مع تأمين الإشعارات اللحظية عبر توقيعات مشفرة.',
    },
    features: [
      { en: 'Secure transaction lifecycle handling', ar: 'إدارة دورة حياة المعاملات المالية بأمان تام' },
      { en: 'Webhook listeners with idempotency guarantees', ar: 'استقبال خطافات الويب مع منع تكرار الدفع نهائياً' },
      { en: 'Automated receipt & invoice generation', ar: 'إصدار تلقائي لإيصالات وسجلات الدفع' },
    ],
    icon: 'CreditCard',
  },
  {
    id: 'database-optimization',
    title: {
      en: 'Database Design & Performance Tuning',
      ar: 'تصميم وتحسين قواعد البيانات والسرعة',
    },
    description: {
      en: 'Normalized & denormalized NoSQL data modeling, compound indexing, aggregation pipelines, and query bottleneck resolution.',
      ar: 'نمذجة قواعد البيانات NoSQL، وبناء الفهارس المركبة، وتحسين استعلامات التجميع (Aggregation) لتسريع الأداء.',
    },
    features: [
      { en: 'High-throughput MongoDB schema architecture', ar: 'تصميم مخططات بيانات تتحمل ملايين السجلات' },
      { en: 'Query profiling & latency minimization', ar: 'فحص سرعة الاستعلامات والقضاء على الاختناقات' },
      { en: 'Data integrity checks & automatic validation', ar: 'قواعد تحقق صارمة لضمان سلامة البيانات' },
    ],
    icon: 'Database',
  },
];
