import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './index';

// ===========================================
// HOOKS TIPADOS
// ===========================================

// Use este hook em vez de useDispatch padrão
// Já vem com os tipos corretos para nossas actions
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// Use este hook em vez de useSelector padrão
// O state já vem tipado como RootState
export const useAppSelector = useSelector.withTypes<RootState>();