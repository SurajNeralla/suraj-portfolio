export interface Skill {
  name: string;
  level: number; // 0-100
  color: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Web Development',
    icon: '🌐',
    color: '#3B82F6',
    skills: [
      { name: 'React', level: 88, color: '#06B6D4' },
      { name: 'Node.js', level: 80, color: '#22C55E' },
      { name: 'Express', level: 75, color: '#6B7280' },
      { name: 'Tailwind CSS', level: 92, color: '#06B6D4' },
      { name: 'TypeScript', level: 80, color: '#3B82F6' },
      { name: 'Firebase', level: 85, color: '#F59E0B' },
      { name: 'Supabase', level: 72, color: '#22C55E' },
    ],
  },
  {
    category: 'Cybersecurity',
    icon: '🛡️',
    color: '#10B981',
    skills: [
      { name: 'Kali Linux', level: 90, color: '#10B981' },
      { name: 'VMware', level: 88, color: '#6366F1' },
      { name: 'Ethical Hacking', level: 85, color: '#F43F5E' },
      { name: 'Penetration Testing', level: 82, color: '#8B5CF6' },
      { name: 'Metasploit', level: 78, color: '#F59E0B' },
      { name: 'Burp Suite', level: 80, color: '#EC4899' },
      { name: 'Network Security', level: 82, color: '#06B6D4' },
      { name: 'Nmap', level: 85, color: '#22C55E' },
      { name: 'OWASP ZAP', level: 75, color: '#F97316' },
      { name: 'Wireshark', level: 78, color: '#3B82F6' },
    ],
  },
  {
    category: 'Programming',
    icon: '💻',
    color: '#8B5CF6',
    skills: [
      { name: 'Python', level: 90, color: '#3B82F6' },
      { name: 'JavaScript', level: 88, color: '#F59E0B' },
      { name: 'HTML', level: 95, color: '#F97316' },
      { name: 'CSS', level: 90, color: '#8B5CF6' },
      { name: 'C', level: 70, color: '#6B7280' },
      { name: 'C++', level: 65, color: '#6B7280' },
      { name: 'Bash/Shell', level: 75, color: '#10B981' },
    ],
  },
  {
    category: 'Automation & AI',
    icon: '🤖',
    color: '#06B6D4',
    skills: [
      { name: 'n8n', level: 92, color: '#EC4899' },
      { name: 'OpenAI API', level: 85, color: '#22C55E' },
      { name: 'REST APIs', level: 88, color: '#3B82F6' },
      { name: 'Webhooks', level: 82, color: '#8B5CF6' },
      { name: 'AI Agents', level: 78, color: '#06B6D4' },
    ],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    color: '#F59E0B',
    skills: [
      { name: 'Git & GitHub', level: 88, color: '#F97316' },
      { name: 'VS Code', level: 95, color: '#3B82F6' },
      { name: 'Figma', level: 75, color: '#EC4899' },
      { name: 'Canva', level: 80, color: '#8B5CF6' },
      { name: 'VirtualBox', level: 82, color: '#F59E0B' },
      { name: 'Hostinger', level: 72, color: '#22C55E' },
    ],
  },
];
