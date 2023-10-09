import course_data from "@/src/data/course-data";
import our_course_data from "@/src/data/our-course-data";

export default function handler(req, res) {
  const { slug } = req.query;

  let responseData;

  if (slug === 'home') {
    responseData = course_data;
  } else if (slug === 'details') {
    responseData = our_course_data;
  } else {
    res.status(404).json({ error: 'Not Found' });
    return;
  }
  res.status(200).json(responseData);
}
