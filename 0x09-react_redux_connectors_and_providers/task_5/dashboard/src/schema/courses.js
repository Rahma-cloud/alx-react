import { schema, normalize } from 'normalizr';
import courseSchema from './courses';

export const courseSchema = new schema.Entity('courses');

export const coursesNormalizer = (data) => normalize(data, [courseSchema]);
