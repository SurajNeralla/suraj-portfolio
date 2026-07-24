export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  color: string;
  icon: string;
  domain: 'web' | 'cybersecurity' | 'ai';
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Placement Portal',
    subtitle: 'Training & Placement System',
    description:
      'A comprehensive multi-institute placement platform featuring front-end and back-end integration, designed to automate candidate registrations, student profile management, and recruitment drives coordination.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Python'],
    liveUrl: '#',
    githubUrl: 'https://github.com/SurajNeralla/placement-portal',
    color: '#3B82F6',
    icon: '🎓',
    domain: 'web',
    image: '/projects/placement_portal.png',
  },
  {
    id: 2,
    title: 'GVP Bus Tracker',
    subtitle: 'Real-Time Transport Tracking',
    description:
      'A responsive transit-tracking web application designed for students and administrators to track bus routes, coordinate seat bookings, and view scheduling information in real time.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel', 'Transit Maps'],
    liveUrl: 'https://gvpbustracker.vercel.app',
    githubUrl: 'https://github.com/SurajNeralla/gvpbustracker',
    color: '#06B6D4',
    icon: '🚌',
    domain: 'web',
    image: '/projects/gvp_bus.png',
  },
  {
    id: 3,
    title: 'AI Attendance Tracker',
    subtitle: 'Face Recognition Automation',
    description:
      'Automated student attendance tracking system using OpenCV and facial recognition algorithms. Logs biometric attendance directly into an SQLite database via real-time camera feeds.',
    tech: ['Python', 'OpenCV', 'Face Recognition', 'Flask', 'SQLite'],
    liveUrl: '#',
    githubUrl: 'https://github.com/SurajNeralla/attendence',
    color: '#8B5CF6',
    icon: '🤖',
    domain: 'ai',
    image: '/projects/attendance.png',
  },
  {
    id: 4,
    title: 'Deepfake Detection Tool',
    subtitle: 'Cybersecurity Forensic Utility',
    description:
      'A high-tech media authentication application designed to analyze video/image streams for digital manipulations. Visualizes manipulation zones using heatmaps, threat indexes, and analysis statistics.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Forensic Analysis', 'Biometrics'],
    liveUrl: 'https://surajneralla.github.io/deepfake/',
    githubUrl: 'https://github.com/SurajNeralla/deepfake',
    color: '#F43F5E',
    icon: '🛡️',
    domain: 'cybersecurity',
    image: '/projects/deepfake.png',
  },
  {
    id: 5,
    title: 'SHC Player & Stats',
    subtitle: 'Sports Analytics Database',
    description:
      'A serverless sports analytics engine and database designed to parse cricket match logs, recalculate batting and bowling stats, and update live scoring leaderboards.',
    tech: ['Python', 'SQL', 'Flask', 'PostgreSQL', 'Vercel'],
    liveUrl: '#',
    githubUrl: 'https://github.com/SurajNeralla/shc-player',
    color: '#10B981',
    icon: '🏏',
    domain: 'web',
    image: '/projects/shc_player.png',
  },
];
