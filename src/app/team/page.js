import { FaTwitter, FaFacebook, FaLinkedin, FaTelegram } from "react-icons/fa";

export default function TeamPage() {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Hani HACHICHO",
      title: "Business Development Director",
      image: "/hani.png",
      bio: "Hani is a qualified professional who is experienced in planning, directing and managing company work activities, functions, and operations. Mr. HACHICHO has a specialization in documenting the history of facility management to fulfill organization contractual obligations, quality standards and performance objectives. He holds a Bachelor's Degree of Arts in Marketing and is very proficient in his field of study. Hani provides expert direction and guidance that subordinates and formulates work plans.",
    },
    {
      id: 2,
      name: "Dr/ Mahdi Assim Mahdi AL-HASANI",
      title: "Business Development Director",
      image: "/hani.png",
      bio: "Dr. Mahdi acquired a Bachelor's Degree in Medicine and Surgery and has a well-rounded set of skills that makes him a valuable asset to the team. His knowledge will be helpful for creating health-wise related content. Dr. AL-HASANI is a self-motivated professional who is an excellent team player and has the ability to work in a busy environment, under pressure and stress.",
    },
    {
      id: 3,
      name: "Dr/ Mohammed Assim Mahdi AL-HASANI",
      title: "Project Manager",
      image: "/hani.png",
      bio: "Dr. Mohammed acquired a Bachelor's Degree in Medicine and Surgery and is an experienced and motivated medical professional with an impressive background. Over the years he has gained a range of skills that makes him a versatile professional and a perfect asset to the team. Dr. AL-HASANI uses problem-solving critical thinking skills while determining the company's project scope and objectives.",
    },
  ];

  return (
    <div className=" mt-20 w-full bg-[url(/aboutbg.png)] bg-cover bg-no-repeat flex flex-col items-center bg-gray-50">
      <div className="container flex flex-col items-center px-5 py-16">
        <div className="flex flex-col items-center">
          {/* Team Header */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#412B59] mb-6">
            Mealtopia Team
          </h2>

          {/* Team Description */}
          <p className="text-gray-600 mb-12">
            We are a team, of energetic and result-driven professionals, that
            benefits from years of extensive development experience, a diversity
            of knowledge, and distinct cultural perspectives. Our vision is to
            become the leading Web Application to improve people's eating habits
            and food choices, by creating a personalized meal plan for every
            customer depending on their preferences and concerns. Meet the team:
          </p>
        </div>

        {/* Team Members Container - Using Flexbox */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map through team members */}
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="w-full flex flex-col items-center mx-auto mb-8"
            >
              <div className="flex flex-col items-start">
                <div className=" bg-white w-full flex justify-center items-center h-80 rounded-lg shadow-md p-6 mb-4">
                  <div className="w-60 h-60 rounded-full overflow-hidden ">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="px-4">
                  <h2 className="text-xl font-bold text-purple-800">
                    {member.name}
                  </h2>
                  <p className="text-green-500 font-medium mb-4">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-4 mt-auto">
                    <FaTwitter
                      className="text-gray-400 hover:text-blue-400 cursor-pointer"
                      size={20}
                    />
                    <FaFacebook
                      className="text-gray-400 hover:text-blue-600 cursor-pointer"
                      size={20}
                    />
                    <FaLinkedin
                      className="text-gray-400 hover:text-blue-700 cursor-pointer"
                      size={20}
                    />
                    <FaTelegram
                      className="text-gray-400 hover:text-blue-500 cursor-pointer"
                      size={20}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
