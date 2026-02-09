import React from 'react';

export default function TagFilter({ allTags = [], selectedTags = [], onTagToggle, onClearAll }) {
  if (!allTags.length) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-700">태그 필터</h3>
        {selectedTags.length > 0 && (
          <button
            onClick={onClearAll}
            className="text-xs text-ms-blue hover:underline"
          >
            전체 해제
          </button>
        )}
      </div>
      <ul className="flex flex-wrap gap-2">
        {allTags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <li key={tag}>
              <button
                onClick={() => onTagToggle(tag)}
                className={`inline-block px-3 py-1 text-sm rounded-full border transition-colors ${
                  isSelected
                    ? 'bg-ms-blue text-white border-ms-blue'
                    : 'bg-white text-slate-600 border-slate-300 hover:border-ms-blue hover:text-ms-blue'
                }`}
              >
                {tag}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
