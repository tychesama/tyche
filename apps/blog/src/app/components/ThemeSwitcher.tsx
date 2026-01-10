"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@shared/ui/hooks/useTheme";
import "./globals.css";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const [open, setOpen] = useState(false);
  const [tempTheme, setTempTheme] = useState<string>(theme!);


  // Placeholder settings
  const [settings, setSettings] = useState({
    animations: true,
    sounds: false,
    experimental: false,
  });

  useEffect(() => {
    if (theme) {
      setTempTheme(theme);
    }
  }, [theme]);

  if (!theme) return null;

  const handleSave = () => {
    setTheme(tempTheme);
    setOpen(false);
  };

  const handleCancel = () => {
    setTempTheme(theme);
    setOpen(false);
  };

  return (
    <>
      {/* Settings Button */}
      <div className="fixed top-0 right-0 z-50 w-[100px] h-[60px]">
        <button
          onClick={() => setOpen(true)}
          className="bg-[var(--color-card)] text-[var(--color-text-main)] w-full h-full shadow hover:opacity-70 transition"
          aria-label="Open settings"
        >
          Settings
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={handleCancel}
          />

          {/* Modal Content */}
          <div className="relative bg-[var(--color-card)] text-[var(--color-text-main)] rounded-lg shadow-lg w-[90%] max-w-md p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Settings</h2>
              <button
                onClick={handleCancel}
                className="text-xl hover:opacity-70"
              >
                ×
              </button>
            </div>

            {/* Theme Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Theme
              </label>
              <select
                value={tempTheme}
                onChange={(e) => setTempTheme(e.target.value)}
                className="w-full bg-[var(--color-card)] border border-gray-600 rounded px-3 py-2 text-sm"
              >
                <option value="professional">Professional</option>
                <option value="alternate">Alternative</option>
                <option value="interactive">Interactive</option>
                <option value="special1">Special 1</option>
                <option value="special2">Special 2</option>
                <option value="special3">Special 3</option>
              </select>
            </div>

            {/* Placeholder Settings */}
            <div className="space-y-3 mb-6">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={settings.animations}
                  onChange={() =>
                    setSettings((s) => ({
                      ...s,
                      animations: !s.animations,
                    }))
                  }
                />
                Enable animations
              </label>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={settings.sounds}
                  onChange={() =>
                    setSettings((s) => ({
                      ...s,
                      sounds: !s.sounds,
                    }))
                  }
                />
                Enable sounds (placeholder)
              </label>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={settings.experimental}
                  onChange={() =>
                    setSettings((s) => ({
                      ...s,
                      experimental: !s.experimental,
                    }))
                  }
                />
                Experimental features
              </label>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <button
                onClick={handleCancel}
                className="px-4 py-2 text-sm border border-gray-600 rounded hover:opacity-80"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 text-sm rounded bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThemeSwitcher;
