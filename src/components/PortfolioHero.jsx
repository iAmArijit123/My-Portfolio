import React, { useState, useEffect } from "react";

const PortfolioHero = () => {
  const roles = ["Developer", "Engineer", "Web Designer", "Tech Enthusiast"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#061013] to-[#040b17] flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="text-white flex-1 flex flex-col gap-5 max-w-xl">
          <h3 className="text-lg font-semibold">Hello, It's me</h3>
          <h1 className="text-4xl md:text-5xl font-extrabold">ARIJIT SASMAL</h1>
          <h2 className="text-2xl font-bold">
            And I'm a{" "}
            <span className="text-cyan-400">{roles[currentRoleIndex]}</span>
          </h2>

          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            And I'm a Graduate Engineer, UI/UX Designer and Frontend Developer
            and more . . .
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <div
            className="rounded-full p-[5px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
            style={{
              boxShadow:
                "0 0 20px 5px #06b6d4, 0 0 30px 15px #8b5cf6, 0 0 15px 5px #ec4899",
              width: "280px",
              height: "280px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://scontent.fblr4-5.fna.fbcdn.net/v/t39.30808-6/510191166_1274892844244608_2998738913099484454_n.jpg?stp=c0.137.1634.1634a_dst-jpg_s206x206_tt6&_nc_cat=103&ccb=1-7&_nc_sid=714c7a&_nc_ohc=Po0RwdIfl60Q7kNvwE5GvTQ&_nc_oc=AdnzVCpeXCbGZwsMk9bcXiBhVgcqPoDxpCz0nzzLFvfYpT5fA048qJSLMMooZ4Za-vTjzh56j8M4YkTPc7yWUXf9&_nc_zt=23&_nc_ht=scontent.fblr4-5.fna&_nc_gid=6UiXXdPy7-DE5CMzWtOy_w&oh=00_AfW-Tc5mNTF8OD8sBft-e0O9-uu7UBupB8FynlkcHlRU6A&oe=68980C2A"
              alt="Arijit Sasmal"
              className="rounded-full w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/296f08e7-36e8-4a5f-853d-e773d09f22ca.png";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;
