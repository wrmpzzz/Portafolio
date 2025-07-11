import { Check } from "lucide-react";
import { dataServices } from "../../data";
import Title from "./shared/title";

export default function Services() {
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8 max-w-3xl mx-auto" id="services">
      <Title title="Services" subtitle="what I do" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
        {dataServices.map((service) => (
          <div
            key={service.id}
            className="rounded-2xl border border-gray-300 dark:border-white p-6 hover:border-gray-400 dark:hover:border-gray-400 transition-all duration-300 hover:shadow-md bg-white dark:bg-transparent"
          >
            <h4 className="mb-5 text-lg sm:text-xl font-semibold flex items-center gap-3 text-gray-900 dark:text-gray-100">
              <span className="text-gray-700 dark:text-gray-300 text-2xl">
                {service.icon}
              </span>
              {service.title}
            </h4>

            <ul className="space-y-4">
              {service.features.map((feature) => (
                <li
                  key={feature.name}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                >
                  <Check
                    size={18}
                    className="text-gray-900 dark:text-gray-100 mt-1 flex-shrink-0"
                  />
                  <span className="text-sm leading-relaxed">
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
