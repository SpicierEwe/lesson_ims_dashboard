import RecommendedCourses from "./sections/recommended_courses/recommended_courses";
import Courses from "./sections/side_nav/courses/courses";
import Reminder from "./sections/side_nav/reminder/reminder";
import SideNav from "./sections/side_nav/side_nav";
import TopNavBar from "./sections/top_nav_bar/top_nav_bar";
function DashBoard() {
  return (
    <div className="flex max-w-screen-2xl w-screen">
      {/* side nav */}

      <div className="w-[20%]">
        <SideNav />
      </div>

      <div className="p-5 md:p-10 w-full pt-10 lg:pt-20">
        {/* top nav bar */}
        <TopNavBar />

        <Reminder />

        {/* Coureses */}
        <Courses />
        <RecommendedCourses />
      </div>
    </div>
  );
}

export default DashBoard;
