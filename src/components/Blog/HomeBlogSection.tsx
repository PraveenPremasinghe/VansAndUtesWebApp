import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import { Blog } from "@/types/blog";

const HomeBlogSection = ({ posts }: { posts: Blog[] }) => {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="bg-white pb-10  dark:bg-dark lg:pb-20  ">
      <div className="container mx-auto">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Blogs"
            title="Our Recent News"
            paragraph=""
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap">
          {posts
            .filter((blog) => blog.slug)
            .slice(0, 3)
            .map((blog, i) => (
              <div key={blog.id || blog.slug || i} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <SingleBlog blog={blog} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
