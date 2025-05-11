'use client';

import React, { useState, useEffect } from 'react';

type Entry = { info: string };

export default function RunningCalendar() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth()); // 0 = Jan
  const [entries, setEntries] = useState<Record<string, Entry>>({});
  const storageKey = 'gymEntries';

  // Load saved entries from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        setEntries(JSON.parse(saved));
      } catch {}
    }
  }, []);

  // Persist entries on change
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(entries));
  }, [entries]);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = new Date(year, month, 1).getDay();

  // Build array of dates (null for empty slots)
  const dates: (number | null)[] = [];
  for (let i = 0; i < firstDayIndex; i++) dates.push(null);
  for (let d = 1; d <= daysInMonth; d++) dates.push(d);

  // Navigate months
  const prevMonth = () => {
    if (month === 0) {
      setYear(y => y - 1);
      setMonth(11);
    } else {
      setMonth(m => m - 1);
    }
  };
  const nextMonth = () => {
    if (month === 11) {
      setYear(y => y + 1);
      setMonth(0);
    } else {
      setMonth(m => m + 1);
    }
  };

  // Handle clicking a day: prompt
  const handleClick = (day: number | null) => {
    if (!day) return;
    const key = `${year}-${month+1}-${day}`;
    const existing = entries[key]?.info?.toString() || '';
    const input = prompt(`Enter Gym Info for ${key}`, existing);
    if (input === null) return;
    if (input.trim() === '') {
      // remove entry
      const { [key]: _, ...rest } = entries;
      setEntries(rest);
    } else {
      setEntries(prev => ({ ...prev, [key]: { info: input } }));
    }
  };

  const weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  return (
    <div className="max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="px-2 py-1 rounded hover:bg-gray-200">‹</button>
        <h2 className="text-lg font-semibold">{monthNames[month]} {year}</h2>
        <button onClick={nextMonth} className="px-2 py-1 rounded hover:bg-gray-200">›</button>
      </div>

      <div className="grid grid-cols-7 gap-px bg-gray-300">
        {weekDays.map(d => (
          <div key={d} className="bg-gray-100 text-center py-1 font-medium">{d}</div>
        ))}

        {dates.map((d, idx) => {
          const key = d ? `${year}-${month+1}-${d}` : '';
          const entry = d ? entries[key] : undefined;
          return (
            <div
              key={idx}
              onClick={() => handleClick(d)}
              className="h-20 p-1 bg-white cursor-pointer hover:bg-gray-100"
            >
              {d && (
                <>
                  <div className="text-sm">{d}</div>
                  {entry && <div className="mt-1 text-xs text-blue-600">{entry.info}</div>}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
