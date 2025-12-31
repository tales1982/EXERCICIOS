import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './index';

// Use esses hooks ao invés dos hooks padrão do react-redux
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
