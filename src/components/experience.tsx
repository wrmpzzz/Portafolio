import Title from "@/components/shared/title";
import { dataExperience } from "../../data";
import { BadgeCheck } from "lucide-react";
import { Progress } from "./ui/progress";

export default function Experience() {
    return (
      <div className="px-4 py-8 md:px-6 max-w-3xl mx-auto" id="experience">
        <Title title="Experience" subtitle="skills I have" />

        <div className="grid gap-6 mt-8 w-full">
          {dataExperience.map((data) => (
            <div
              key={data.id}
              className="p-6 rounded-xl border border-gray-300 hover:border-gray-400 transition-colors duration-300 w-full"
            >
              <h3 className="text-center text-xl font-medium mb-6 md:mb-8">
                {data.title}
              </h3>

              <div className="space-y-5 w-full max-w-3xl mx-auto">
                {data.experience.map((item) => (
                  <div
                    key={item.name}
                    className="my-2 hover:scale-105 rounded-lg p-3 transition-all duration-500 w-full"
                  >
                    <div className="flex gap-3 items-center mb-2 w-full justify-center">
                      <BadgeCheck className="text-primary flex-shrink-0" />
                      <div className="w-full">
                        <p className="font-medium text-dark dark:text-white">{item.name}</p>
                        <p className="text-gray-white text-sm mt-1">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    <Progress value={item.value} className="h-2mt-2 w-full" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}