import Header from "@components/Header";
import Footer from "@components/Footer";

function App() {
  const cards = [
    {
      img: "image-currency.jpg",
      author: "By Claire Robinson",
      header: "Receive money in any currency with no fees",
      content:
        "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
    },
    {
      img: "image-restaurant.jpg",
      author: "By Wilson Hutton",
      header: "Treat yourself without worrying about money",
      content:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
    },
    {
      img: "image-plane.jpg",
      author: "By Wilson Hutton",
      header: "Take your Easybank card wherever you go",
      content:
        "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...",
    },
    {
      img: "image-confetti.jpg",
      author: "By Claire Robinson",
      header: "Our invite-only Beta accounts are now live!",
      content:
        "After a lot of hard work by the whole team, we're excited to launch our closed beta.It's easy to request an invite through the site...",
    },
  ];

  const cards1 = [
    {
      img: "icon-online.svg",
      header: "Online Banking",
      content:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world",
    },
    {
      img: "icon-budgeting.svg",
      header: "Simple Budgeting",
      content:
        " See exactly where your money goes each month. Receive notifications when you're close to your hitting limits.",
    },
    {
      img: "icon-onboarding.svg",
      header: "Fast Onboarding",
      content:
        "We don't do branches. Open your account in minutes and start taking control of your finances right away.",
    },
    {
      img: "icon-api.svg",
      header: "Open API",
      content:
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      <Header />
      <div className="hidden md:block md:absolute md:top-0 md:right-0 w-full md:h-full max-w-2xl z-10">
        <img
          src="/bg-intro-desktop.svg"
          alt="Background"
          className="absolute top-0 right-0 h-full md:-top-0 md:-right-80 lg:-top-0 lg:-right-35 md:h-auto md:w-full transform md:scale-125"
        />
      </div>

      <div className="hidden md:block mt-10 md:mt-0 md:absolute md:top-0 lg:right-0 md:w-full md:-right-20 lg:max-w-xl md:max-w-lg z-10 transform md:translate-x-24 md:-translate-y-12">
        <img src="/image-mockups.png" alt="Phone" className="w-full " />
      </div>
      <main className="h-full">
        <section className="relative bg-white">
          {/* Content wrapper */}
          <div className="max-w-7xl mx-auto  md:flex md:items-center md:px-6 px-2">
            {/* Text content - will stack on mobile */}
            <div className="py-16 md:py-24 md:w-1/2 relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Next generation <br className="hidden md:block" />
                digital banking
              </h1>
              <p className="mt-4 mb-8 text-gray-500 text-lg">
                Take your financial life online. Your Easybank account{" "}
                <br className="hidden md:block" />
                will be a one-stop-shop for spending, saving,{" "}
                <br className="hidden md:block" />
                budgeting, investing, and much more.
              </p>
              <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:from-green-500 hover:to-blue-600 transition-all">
                Request Invite
              </button>
            </div>

            {/* Image container - positioned correctly for desktop and mobile */}
          </div>
        </section>

        <section className=" bg-gray-100 px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-5">
                Why choose Easybank?
              </h2>
              <p className="text-gray-500 text-lg max-w-lg">
                We leverage Open Banking to turn your bank account into your
                financial hub. Control your finances like never before.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cards1.map((c, index) => (
                <div key={index} className="flex flex-col items-start">
                  <img src={c.img} alt={c.header} className="w-20 h-20 mb-8" />
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {c.header}
                  </h3>
                  <p className="text-gray-500">{c.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cards.map((c, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.header}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 bg-white flex-grow">
                    <p className="text-sm text-gray-500 mb-2">{c.author}</p>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {c.header}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {c.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
