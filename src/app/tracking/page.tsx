// app/tracking/page.tsx
import GymCalendar from '@/components/GymCalendar';
import RunningCalendar from '@/components/RunningCalendar';

export default function TrackingPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Running Tracker</h1>
      <RunningCalendar />
      <GymCalendar />
    </main>
  );
}
