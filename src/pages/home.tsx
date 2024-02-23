import DefaultLayout from "@/layouts/default";

function HomePage() {
  return (
    <>
      <DefaultLayout>
        <>
          <h2 className="text-lg">
            <b>#Featured</b> Stories
          </h2>
          <div className="flex flex-col gap-3">
            <h2 className="text-lg">
              <b>#Latest</b> Stories
            </h2>
          </div>
        </>
      </DefaultLayout>
    </>
  );
}

export default HomePage;
