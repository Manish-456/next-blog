import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
const postsDirectory = path.join(process.cwd(), "blogPosts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from filename to get id;
    const id = fileName.replace(/\.md$/, "");
    //Read markdown file as string

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const blogPost: BlogPost = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    };
    // Combine the data with the id

    return blogPost;
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter fo parse the post metadata section
  const matterResult = matter(fileContent);
  const processedContent = await remark().use(html).process(matterResult.content);


  const contentHTML = processedContent.toString();
  const blogPostWithHTML: BlogPost & { contentHTML: string } = {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHTML,
  };
  // combine the data with the id
  return blogPostWithHTML;
}
