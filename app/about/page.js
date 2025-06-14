"use client"
import Image from 'next/image';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & Editor-in-Chief",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      bio: "Passionate about technology and writing, Sarah leads our editorial team with over 10 years of experience."
    },
    {
      name: "Michael Chen",
      role: "Senior Tech Writer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      bio: "Michael specializes in AI and machine learning, bringing complex topics to life for our readers."
    },
    {
      name: "Emma Rodriguez",
      role: "Content Strategist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      bio: "Emma ensures our content strategy aligns with our mission to educate and inspire."
    }
  ];

  const values = [
    {
      title: "Quality Content",
      description: "We believe in delivering well-researched, accurate, and engaging content that adds value to our readers' lives.",
      icon: "📚"
    },
    {
      title: "Community First",
      description: "Building a strong community of readers and writers who share knowledge and experiences.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "Constantly exploring new ideas and technologies to bring fresh perspectives to our audience.",
      icon: "💡"
    },
    {
      title: "Integrity",
      description: "Maintaining the highest standards of journalistic integrity and ethical content creation.",
      icon: "✨"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Team collaboration"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Our Blog
            </h1>
            <p className="text-xl">
              We're a team of passionate writers and tech enthusiasts dedicated to sharing knowledge and inspiring others.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              We believe in the power of knowledge sharing and community building. Our mission is to create a platform where technology enthusiasts, developers, and curious minds can come together to learn, share, and grow. Through our carefully curated content, we aim to make technology accessible to everyone while maintaining the highest standards of quality and accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="mb-3">{member.role}</p>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-lg mb-8">
              Whether you're a reader, writer, or tech enthusiast, there's a place for you in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-lg font-medium">
                Start Writing
              </button>
              <button className="px-8 py-3 rounded-lg font-medium border">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;