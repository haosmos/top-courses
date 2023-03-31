import {
  TopLevelCategory,
  CourseModel
} from '../../interfaces/page.interface';
import { ProductModel } from '../../interfaces/product.interface';

export interface TopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: CourseModel;
  products: ProductModel[];
}
