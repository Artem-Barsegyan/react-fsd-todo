import type { FolderColor } from '../model/types';
import { generateId } from '@/shared/lib';

export const folderColors: FolderColor[] = [
  {
    id: generateId(),
    color: '#c9d1d3',
    colorName: 'Серый',
    isActive: true,
  },
  {
    id: generateId(),
    color: '#42b883',
    colorName: 'Зеленый',
    isActive: false,
  },
  {
    id: generateId(),
    color: '#64c4ed',
    colorName: 'Голубой',
    isActive: false,
  },
  {
    id: generateId(),
    color: '#ffbbcc',
    colorName: 'Розовый',
    isActive: false,
  },
  {
    id: generateId(),
    color: '#b6e6bd',
    colorName: 'Салатовый',
    isActive: false,
  },
  {
    id: generateId(),
    color: '#c355f5',
    colorName: 'Фиолетовый',
    isActive: false,
  },
  {
    id: generateId(),
    color: '#09011a',
    colorName: 'Черный',
    isActive: false,
  },
  {
    id: generateId(),
    color: '#ff6464',
    colorName: 'Красный',
    isActive: false,
  },
];
