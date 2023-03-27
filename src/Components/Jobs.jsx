import JobSearchForm from "./JobListing/JobSearchForm";

const Jobs = () => {
  const jobPostings = [
    {
      logo: "Google",
      work: "fulltime",
      job: "Front-End Developer",
      location: "Mountain View, CA",
      datePosted: "2022-03-25",
      salary: "120000",
      field: "Information Technology",
      keyResponsibilities: [
        "Develop and maintain web applications using HTML, CSS, and JavaScript",
        "Collaborate with designers to ensure that the user interface is user-friendly and visually appealing",
        "Write clean, efficient, and well-documented code",
        "Participate in code reviews and help maintain code quality standards",
        "Stay up-to-date with emerging technologies and trends in web development",
      ],
      jobDescription:
        "We are looking for an experienced Front-End Developer to join our team. The ideal candidate will have a passion for creating engaging user experiences and a strong background in web development.",
      requiredSkill: [
        "Proficient in HTML, CSS, and JavaScript",
        "Experience with front-end frameworks such as React or Angular",
        "Familiarity with version control systems such as Git",
        "Knowledge of web accessibility standards and best practices",
        "Strong problem-solving skills and attention to detail",
      ],
      benefits:
        "We offer competitive salaries, comprehensive health benefits, 401(k) matching, and a fun and dynamic work environment.",
    },
    {
      logo: "Apple",
      work: "fulltime",
      job: "iOS Developer",
      location: "Cupertino, CA",
      datePosted: "2022-03-24",
      salary: "130000",
      field: "Information Technology",
      keyResponsibilities: [
        "Design and implement new features and functionality for iOS applications",
        "Collaborate with cross-functional teams to define, design, and ship new features",
        "Write clean, maintainable, and well-documented code",
        "Identify and correct bottlenecks and fix bugs",
        "Stay up-to-date with emerging trends and technologies in iOS development",
      ],
      jobDescription:
        "We are seeking an experienced iOS Developer to join our team. The ideal candidate will have a passion for mobile development and a strong background in iOS app development.",
      requiredSkill: [
        "Proficient in Objective-C and/or Swift",
        "Experience with iOS frameworks such as UIKit, Core Data, and Core Animation",
        "Familiarity with RESTful APIs and web services",
        "Experience with Git or other version control systems",
        "Excellent problem-solving and analytical skills",
      ],
      benefits:
        "We offer competitive compensation packages, comprehensive health benefits, and opportunities for career advancement.",
    },
    {
      logo: "Acme Corporation",
      work: "full-time",
      job: "Software Engineer",
      location: "New York, NY",
      datePosted: "2022-03-18",
      salary: "$120,000 - $150,000 per year",
      field: "Technology",
      keyResponsibilities:
        "• Develop and maintain software applications\n• Collaborate with cross-functional teams to identify and solve complex problems\n• Write clean, maintainable code that is well-documented\n• Participate in code reviews and provide constructive feedback\n• Stay up-to-date with emerging trends and technologies in software engineering",
      jobDescription:
        "We are seeking a skilled software engineer to join our growing team. In this role, you will be responsible for developing and maintaining high-quality software applications that meet the needs of our customers. The ideal candidate is a self-starter who is passionate about technology and is able to work independently or as part of a team.",
      requiredSkill:
        "• Bachelor's degree in Computer Science or related field\n• 3+ years of experience in software engineering\n• Strong proficiency in at least one programming language, such as Java or Python\n• Experience with web development frameworks, such as React or Angular\n• Familiarity with databases and SQL",
      benefits:
        "• Comprehensive health, dental, and vision insurance\n• 401(k) retirement plan with company match\n• Generous paid time off\n• Flexible work hours\n• Opportunities for professional development",
    },
    {
      logo: "Global Enterprises",
      work: "part-time",
      job: "Marketing Coordinator",
      location: "Los Angeles, CA",
      datePosted: "2022-03-19",
      salary: "$25 - $30 per hour",
      field: "Marketing",
      keyResponsibilities:
        "• Assist with the development and implementation of marketing strategies\n• Coordinate marketing campaigns across multiple channels, including email, social media, and digital advertising\n• Conduct market research and analyze data to identify trends and opportunities\n• Create and maintain marketing materials, such as brochures and presentations\n• Support the marketing team with administrative tasks as needed",
      jobDescription:
        "We are looking for a part-time marketing coordinator to join our team. In this role, you will be responsible for supporting the marketing team in developing and executing marketing strategies that drive business growth. The ideal candidate is a creative thinker who is detail-oriented and able to manage multiple projects at once.",
      requiredSkill:
        "• Bachelor's degree in Marketing or related field\n• 1+ years of experience in marketing or related field\n• Strong written and verbal communication skills\n• Proficiency in Microsoft Office and Adobe Creative Suite\n• Familiarity with marketing automation software, such as Hubspot or Marketo",
      benefits:
        "• Flexible work schedule\n• Opportunities for professional development\n• Casual dress code\n• Collaborative team environment\n• Potential for growth within the company",
    },
    {
      logo: "Acme Corporation",
      work: "fulltime",
      job: "Marketing Manager",
      location: "San Francisco, CA",
      datePosted: "2022-02-15",
      salary: "$80,000 - $100,000",
      field: "Marketing",
      keyResponsibilities:
        "- Develop and implement marketing strategies that align with company goals\n- Analyze market trends and adjust campaigns accordingly\n- Collaborate with sales and product teams to ensure consistency in messaging\n- Manage a team of marketing professionals\n- Track and report on marketing campaign results",
      jobDescription:
        "Acme Corporation is seeking a Marketing Manager to lead our marketing efforts. The ideal candidate is a strategic thinker who can create and execute marketing plans that drive results. You'll work closely with the sales and product teams to ensure that our messaging is consistent and aligned with company goals.",
      requiredSkills:
        "- Bachelor's degree in Marketing or related field\n- 5+ years of experience in a marketing leadership role\n- Strong analytical skills and ability to translate data into actionable insights\n- Excellent communication and collaboration skills\n- Experience managing and developing a team",
      benefits:
        "- Health, dental, and vision insurance\n- 401(k) plan\n- Generous vacation time\n- Professional development opportunities\n- Casual dress code",
    },
    {
      logo: "XYZ Corporation",
      work: "part-time",
      job: "Social Media Specialist",
      location: "Remote",
      datePosted: "2022-03-10",
      salary: "$25 - $30 per hour",
      field: "Social Media",
      keyResponsibilities:
        "- Develop and execute social media content calendar\n- Monitor and respond to social media comments and messages\n- Collaborate with marketing and design teams to create engaging content\n- Analyze social media metrics and adjust strategy as needed\n- Stay up-to-date with social media trends and platform updates",
      jobDescription:
        "XYZ Corporation is seeking a part-time Social Media Specialist to manage our social media presence. The ideal candidate is creative and organized, with experience managing social media accounts for a brand. This is a remote position.",
      requiredSkills:
        "- 2+ years of experience managing social media accounts for a brand\n- Strong writing and editing skills\n- Knowledge of social media best practices and platform updates\n- Ability to work independently and collaborate with a team\n- Experience with social media scheduling and analytics tools",
      benefits:
        "- Flexible schedule\n- Work from home\n- Opportunity to work with a growing company\n- Access to professional development resources\n- Competitive hourly rate",
    },
    {
      logo: "Globex Corporation",
      work: "part-time",
      job: "Marketing Assistant",
      location: "New York, NY",
      datePosted: "2022-03-25",
      salary: "$18 - $22 per hour",
      field: "Marketing",
      keyResponsibilities: [
        "Assist in developing and implementing marketing strategies",
        "Create and edit marketing materials",
        "Conduct market research and analysis",
        "Maintain and update social media accounts",
        "Provide administrative support to marketing team",
      ],
      jobDescription:
        "We are seeking a Marketing Assistant to join our team. The ideal candidate is creative, detail-oriented, and has a passion for marketing. In this role, you will support our marketing team in developing and executing marketing strategies and initiatives.",
      requiredSkills: [
        "Excellent written and verbal communication skills",
        "Proficiency in Microsoft Office and Google Suite",
        "Familiarity with social media platforms",
        "Strong organizational and time-management skills",
        "Ability to work independently and as part of a team",
      ],
      benefits: "Flexible schedule, opportunities for growth and development",
    },
    {
      logo: "Initech",
      work: "full-time",
      job: "Financial Analyst",
      location: "Chicago, IL",
      datePosted: "2022-03-26",
      salary: "$70,000 - $90,000 per year",
      field: "Finance",
      keyResponsibilities: [
        "Analyze financial data and prepare reports",
        "Monitor financial performance and identify trends",
        "Develop financial models and forecasts",
        "Assist in budgeting and financial planning",
        "Collaborate with other departments to support business goals",
      ],
      jobDescription:
        "We are seeking a Financial Analyst to join our team. The ideal candidate has a strong analytical mindset and experience in financial analysis and modeling. In this role, you will play a key role in supporting the financial planning and analysis function and partnering with other departments to achieve business objectives.",
      requiredSkills: [
        "Bachelor's degree in Finance, Accounting, or related field",
        "3+ years of experience in financial analysis",
        "Proficiency in Excel and financial modeling",
        "Strong analytical and problem-solving skills",
        "Excellent communication and interpersonal skills",
      ],
      benefits:
        "Competitive salary, health and retirement benefits, opportunities for advancement",
    },
    {
      logo: "Globex Corporation",
      work: "part-time",
      job: "Marketing Assistant",
      location: "New York, NY",
      datePosted: "2022-03-25",
      salary: "$18 - $22 per hour",
      field: "Marketing",
      keyResponsibilities: [
        "Assist in developing and implementing marketing strategies",
        "Create and edit marketing materials",
        "Conduct market research and analysis",
        "Maintain and update social media accounts",
        "Provide administrative support to marketing team",
      ],
      jobDescription:
        "We are seeking a Marketing Assistant to join our team. The ideal candidate is creative, detail-oriented, and has a passion for marketing. In this role, you will support our marketing team in developing and executing marketing strategies and initiatives.",
      requiredSkills: [
        "Excellent written and verbal communication skills",
        "Proficiency in Microsoft Office and Google Suite",
        "Familiarity with social media platforms",
        "Strong organizational and time-management skills",
        "Ability to work independently and as part of a team",
      ],
      benefits: "Flexible schedule, opportunities for growth and development",
    },
    {
      logo: "Initech",
      work: "full-time",
      job: "Financial Analyst",
      location: "Chicago, IL",
      datePosted: "2022-03-26",
      salary: "$70,000 - $90,000 per year",
      field: "Finance",
      keyResponsibilities: [
        "Analyze financial data and prepare reports",
        "Monitor financial performance and identify trends",
        "Develop financial models and forecasts",
        "Assist in budgeting and financial planning",
        "Collaborate with other departments to support business goals",
      ],
      jobDescription:
        "We are seeking a Financial Analyst to join our team. The ideal candidate has a strong analytical mindset and experience in financial analysis and modeling. In this role, you will play a key role in supporting the financial planning and analysis function and partnering with other departments to achieve business objectives.",
      requiredSkills: [
        "Bachelor's degree in Finance, Accounting, or related field",
        "3+ years of experience in financial analysis",
        "Proficiency in Excel and financial modeling",
        "Strong analytical and problem-solving skills",
        "Excellent communication and interpersonal skills",
      ],
      benefits:
        "Competitive salary, health and retirement benefits, opportunities for advancement",
    },
  ];

  const filteredJobPostings = jobPostings.filter(
    (posting) => Object.keys(posting).length !== 0
  );

  return (
    <>
      <JobSearchForm filteredJobPostings={filteredJobPostings} />
    </>
  );
};

export default Jobs;
