import SingleBlog from "@/components/Blog/SingleBlog";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";
import { getAllBlogs } from "@/data/mockBlogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Vans & Utes - Rental Tips and Guides",
  description: "Discover helpful tips, guides, and insights about vehicle rentals, road trips, and making the most of your rental experience with Vans & Utes.",
};

const Blog = () => {
  const blogs = getAllBlogs();
  const validBlogs = blogs.filter((blog) => blog && blog.slug && blog.title);

  return (
    <>
      <Breadcrumb pageName="Our Blog" />

      <section className="pb-10 pt-10 dark:bg-dark lg:pb-20  ">
        <div className="container">
          {validBlogs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-body-color dark:text-dark-6">No blog posts available at the moment.</p>
            </div>
          ) : (
            <>
              {/* <div className="mb-16">
                <SectionTitle
                  subtitle="Our Blog"
                  title="Latest News & Articles"
                  paragraph="Stay updated with our latest tips, guides, and insights about vehicle rentals, road trips, and making the most of your rental experience."
                  width="640px"
                  center
                />
              </div> */}
              
              <div className="-mx-4 flex flex-wrap">
                {validBlogs.map((blog) => (
                  <div key={blog.id || blog.slug} className="w-full px-4 md:w-1/2 lg:w-1/2 xl:w-1/3 mb-10">
                    <SingleBlog blog={blog} />
                  </div>
                ))}
              </div>

              {validBlogs.length > 0 && (
                <div className="mt-12 text-center">
                  <p className="text-base text-body-color dark:text-dark-6">
                    Showing {validBlogs.length} article{validBlogs.length !== 1 ? 's' : ''}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
