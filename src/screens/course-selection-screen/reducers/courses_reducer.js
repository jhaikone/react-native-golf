import courses from '../../../../mocks/courses.json';

export default () => courses.map((course) => {
    return { ...course, key: course.id }
  }).sort((a,b) => {
        return a.name.localeCompare(b.name);
  });

