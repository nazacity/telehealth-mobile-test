import images from 'assets/images';

export interface IDoctor {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  rating: string;
  department: string;
  location: string;
  fee: number;
  imageUrl: any;
}

export interface IDoctorCategory {
  id: string;
  title: string;
}

export const categoryLists = [
  {
    id: '1',
    title: 'ทั้งหมด',
  },
  {
    id: '2',
    title: 'แพทย์',
  },
  {
    id: '3',
    title: 'ทันตแพทย์',
  },
  {
    id: '4',
    title: 'เภสัชกร',
  },
  {
    id: '5',
    title: 'เด็ก',
  },
];

export const doctorLists = [
  {
    id: '1',
    title: 'รศ.ภญ.',
    firstName: 'สุณี',
    lastName: 'เลิศสินอุดม',
    rating: '5.0',
    department: 'เเพทย์ (โรคทั่วไป)',
    location: 'โรงพยาบาลขอนแก่น',
    fee: 0,
    imageUrl: images.doctor_mock,
  },
  {
    id: '2',
    title: 'รศ.ภญ.',
    firstName: 'สุณี',
    lastName: 'เลิศสินอุดม',
    rating: '5.0',
    department: 'เเพทย์ (โรคทั่วไป)',
    location: 'โรงพยาบาลขอนแก่น',
    fee: 0,
    imageUrl: images.doctor_mock,
  },
  {
    id: '3',
    title: 'รศ.ภญ.',
    firstName: 'สุณี',
    lastName: 'เลิศสินอุดม',
    rating: '5.0',
    department: 'เเพทย์ (โรคทั่วไป)',
    location: 'โรงพยาบาลขอนแก่น',
    fee: 0,
    imageUrl: images.doctor_mock,
  },
  {
    id: '4',
    title: 'รศ.ภญ.',
    firstName: 'สุณี',
    lastName: 'เลิศสินอุดม',
    rating: '5.0',
    department: 'เเพทย์ (โรคทั่วไป)',
    location: 'โรงพยาบาลขอนแก่น',
    fee: 0,
    imageUrl: images.doctor_mock,
  },
  {
    id: '5',
    title: 'รศ.ภญ.',
    firstName: 'สุณี',
    lastName: 'เลิศสินอุดม',
    rating: '5.0',
    department: 'เเพทย์ (โรคทั่วไป)',
    location: 'โรงพยาบาลขอนแก่น',
    fee: 0,
    imageUrl: images.doctor_mock,
  },
];

export const logoLists = [
  {
    id: '1',
    imageUrl: images.badge1,
  },
  {
    id: '2',
    imageUrl: images.badge2,
  },
  {
    id: '3',
    imageUrl: images.badge3,
  },
  {
    id: '4',
    imageUrl: images.badge4,
  },
  {
    id: '5',
    imageUrl: images.badge5,
  },
];
