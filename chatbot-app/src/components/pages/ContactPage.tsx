function ContactPage() {
  const contacts = [
    {
      icon: "📧",
      title: "Email",
      value: "chinmayeebl2007@gmail.com",
      link: "mailto:chinmayeebl2007@gmail.com",
    },
    {
      icon: "💻",
      title: "GitHub",
      value: "github.com/chinmayeebl2007",
      link: "https://github.com/chinmayeebl2007",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/chinmayeebl",
      link: "https://linkedin.com/in/chinmayeebl",
    },
    {
      icon: "🤖",
      title: "Portfolio AI",
      value: "Ask me anything about my projects",
      link: "#",
    },
  ];

  return (
    <section className="page-card">

      <div className="page-header">
        <div>
          <h1>📬 Contact Me</h1>
          <p>Let's connect.</p>
        </div>
      </div>

      <div className="contact-grid">

        {contacts.map((item) => (

          <button
            key={item.title}
            className="contact-card"
            onClick={() => {
              if (item.link !== "#") {
                window.open(item.link, "_blank");
              }
            }}
          >
            <div
              style={{
                fontSize:42,
                marginBottom:18,
              }}
            >
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.value}</p>

          </button>

        ))}

      </div>

    </section>
  );
}

export default ContactPage;