import ExperienceCard from "./experienceCard";

export default function Experience() {
  return (
    <>
      <p className="text-3xl font-bold text-center my-6 text-textPrimary mt-5">
        <span className="text-lightBlue">E</span>xperience
      </p>
      <ExperienceCard
        title="Front-End Developer"
        company="Infact Solutions (PVT) Ltd"
        dates="2024/04/22 - 2024/10/22"
        description="I work as a Front-End Developer at Infact Solutions (PVT) Ltd, crafting efficient and dynamic web solutions."
      />
    </>
  );
}
