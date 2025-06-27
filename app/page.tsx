'use client';
import Editor from '@/components/Editor';
import ThemeToggle from '@/components/ThemeToggle';
import ChatSidebar from '@/components/ChatSidebar';
import AmbientSound from '@/components/AmbientSound';
import TypingFlowTracker from '@/components/TypingFlowTracker';

export default function Home() {
  return (
    <div className="relative flex h-screen bg-black text-white">
      <AmbientSound />
      <TypingFlowTracker />
      <div className="flex-1 p-4">
        <ThemeToggle />
        <Editor />
      </div>
      <ChatSidebar />
    </div>
  );
}
