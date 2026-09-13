'use client';
import { Moon, Sun } from 'lucide-react'; import { useTheme } from '@/components/theme-provider';
export function ThemeToggle(){const{resolvedTheme,setTheme}=useTheme();return <button className="icon-button" aria-label="Toggle color theme" onClick={()=>setTheme(resolvedTheme==='dark'?'light':'dark')}>{resolvedTheme==='dark'?<Sun size={17}/>:<Moon size={17}/>}</button>}
