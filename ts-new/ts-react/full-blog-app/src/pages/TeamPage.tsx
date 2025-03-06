const TeamPage = () => {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "Lead Developer",
      bio: "Jane is an experienced React developer with a passion for building clean, efficient user interfaces.",
      avatar: "👩‍💻",
    },
    {
      name: "John Smith",
      role: "UX Designer",
      bio: "John specializes in creating intuitive user experiences and beautiful designs for web applications.",
      avatar: "👨‍🎨",
    },
    {
      name: "Alex Johnson",
      role: "Content Writer",
      bio: "Alex creates engaging content for our blog, focusing on web development trends and best practices.",
      avatar: "✍️",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Meet Our Team</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-start">
              <div className="text-4xl mr-4">{member.avatar}</div>
              <div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
