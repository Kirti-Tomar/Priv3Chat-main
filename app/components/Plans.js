export default function PlanSection() {
    const plans = [
      {
        name: "Basic",
        price: "$10/month",
        description: "Ideal for personal use with essential features.",
        features: [
          "Encrypted Messaging",
          "Basic Support",
          "Limited Storage",
          "Single Device Access"
        ],
      },
      {
        name: "Normal",
        price: "$25/month",
        description: "Great for professionals with priority access.",
        features: [
          "All Basic Features",
          "Priority Support",
          "Increased Storage",
          "Multi-Device Sync",
          "Faster Message Processing"
        ],
      },
      {
        name: "Advanced",
        price: "$50/month",
        description: "Perfect for enterprises needing top security & support.",
        features: [
          "All Normal Features",
          "24/7 Dedicated Support",
          "Unlimited Storage",
          "Enterprise-Level Encryption",
          "Customizable Security Policies",
          "Early Access to New Features"
        ],
      },
    ];
  
    return (
      <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-800 to-black text-white text-center min-h-screen flex flex-col">
        <h2 className="text-4xl font-extrabold mb-10">Choose Your Plan</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Select the best plan that fits your needs. Whether you're an individual, professional, or business, we have the right option for you.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg w-80">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-md italic text-gray-300 mt-1">{plan.description}</p>
              <p className="text-xl font-semibold text-blue-200 mt-2">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-left pl-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-200 list-disc">{feature}</li>
                ))}
              </ul>
              <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition-all">
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }