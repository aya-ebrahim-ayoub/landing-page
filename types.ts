
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  image: string;
  availability: string[];
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Appointment {
  doctorId: string;
  patientName: string;
  date: string;
  time: string;
  notes: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
