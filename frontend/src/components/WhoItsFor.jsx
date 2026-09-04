


import {
  TrendingUp,
  Headphones,
  Megaphone,
  Building2,
} from "lucide-react";

const teams = [
  {
    title: "Sales Team",
    description:
      "Close deals faster by tracking every WhatsApp lead in one pipeline.",
    icon: TrendingUp,
  },
  {
    title: "Support Team",
    description:
      "Respond to customers in seconds with a shared team inbox.",
    icon: Headphones,
  },
  {
    title: "Marketing",
    description:
      "Run campaigns and segment contacts without messy spreadsheets.",
    icon: Megaphone,
  },
  {
    title: "Small Business",
    description:
      "Manage your team and every customer relationship in one view.",
    icon: Building2,
  },
];

function WhoItsFor() {
  return (
    <section
  id="features"
  className="bg-[#f8f8f8] px-6 py-20"
>
      <div className="mx-auto max-w-7xl">

        {/* ================================================= */}
        {/* SECTION HEADING */}
        {/* ================================================= */}

        <div className="mb-12 text-center">

          {/* Section Label */}
          <p
            className="
              mb-3
              text-[22px]
              font-bold
              text-[#25D366]
            "
          >
            Whom It's For
          </p>

          {/* Section Title */}
          <h2
            className="
              text-[32px]
              font-semibold
              leading-tight
              tracking-[-0.8px]
              text-gray-900
              md:text-[38px]
            "
          >
            Built for teams that live in WhatsApp
          </h2>

        </div>


        {/* ================================================= */}
        {/* CARDS */}
        {/* ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {teams.map((team) => {
            const Icon = team.icon;

            return (
              <div
                key={team.title}
                className="
                  h-[255px]
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >

                {/* ================================================= */}
                {/* ICON */}
                {/* ================================================= */}

                <div
                  className="
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#d1fae5]
                  "
                >
                  <Icon
                    size={27}
                    strokeWidth={2}
                    className="text-[#25D366]"
                  />
                </div>


                {/* ================================================= */}
                {/* CARD TITLE */}
                {/* ================================================= */}

                <h3
                  className="
                    mb-3
                    text-[20px]
                    font-semibold
                    text-gray-950
                  "
                >
                  {team.title}
                </h3>


                {/* ================================================= */}
                {/* DESCRIPTION */}
                {/* ================================================= */}

                <p
                  className="
                    max-w-[250px]
                    text-[15px]
                    leading-6
                    text-gray-500
                  "
                >
                  {team.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhoItsFor;

