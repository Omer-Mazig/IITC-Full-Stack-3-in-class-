const VisionPage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Our Vision</h2>

      <div className="prose prose-lg max-w-none">
        <p className="mb-4">
          Our vision is to create a platform where developers can share
          knowledge, learn from each other, and stay up-to-date with the latest
          trends in web development.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Our Mission</h3>
        <p className="mb-4">
          We strive to provide high-quality, accessible content that helps
          developers of all skill levels improve their craft and build better
          web applications.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Our Values</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            <strong>Quality:</strong> We believe in creating content that is
            accurate, well-researched, and valuable to our readers.
          </li>
          <li>
            <strong>Accessibility:</strong> We aim to make complex topics
            understandable to developers at all levels.
          </li>
          <li>
            <strong>Community:</strong> We foster a supportive community where
            developers can learn from each other.
          </li>
          <li>
            <strong>Innovation:</strong> We stay at the forefront of web
            development trends and technologies.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Future Goals</h3>
        <p>
          In the coming years, we plan to expand our platform to include
          interactive tutorials, code challenges, and a community forum where
          developers can connect and collaborate.
        </p>
      </div>
    </div>
  );
};

export default VisionPage;
