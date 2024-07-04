export default function StatsCard() {
  return (
    <div className="bg-lightBlue text-textPrimary rounded-md p-6 flex flex-col gap-8 items-center w-40">
      <div className="text-center">
        <p className="text-4xl font-bold text-textPrimary">2</p>
        <p className="text-xl mt-2 text-textPrimary">Happy Clients</p>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold text-textPrimary">4</p>
        <p className="text-xl mt-2 text-textPrimary">Projects Completed</p>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold text-textPrimary">3</p>
        <p className="text-xl mt-2 text-textPrimary">Years of Experience</p>
      </div>
    </div>
  );
}
