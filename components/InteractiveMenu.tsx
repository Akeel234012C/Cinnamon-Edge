'use client';

import React, { useState } from 'react';
import { Phone, Plus, Search, SlidersHorizontal, Trash2 } from 'lucide-react';
import {
  MENU_CATEGORIES,
  MenuCategory,
  MenuItem,
  UNCONFIRMED_CATEGORY_DESCRIPTIONS,
  filterMenuByCategory,
  formatAudPrice,
  validateNewMenuItemInput,
} from '@/lib/restaurant-data';

interface InteractiveMenuProps {
  activeCategory: MenuCategory;
  onSelectCategory: (category: MenuCategory) => void;
  allMenuItems: MenuItem[];
  onAddCustomMenuItem: (item: MenuItem) => void;
  onRemoveCustomMenuItem: (id: string) => void;
  phoneHref: string;
  phoneDisplay: string;
  uberEatsUrl: string;
}

export default function InteractiveMenu({
  activeCategory,
  onSelectCategory,
  allMenuItems,
  onAddCustomMenuItem,
  onRemoveCustomMenuItem,
  phoneHref,
  phoneDisplay,
  uberEatsUrl,
}: InteractiveMenuProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newDishName, setNewDishName] = useState('');
  const [newDishPrice, setNewDishPrice] = useState('');
  const [newDishDesc, setNewDishDesc] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

  const filteredItems = filterMenuByCategory(
    allMenuItems,
    activeCategory,
    searchQuery
  );

  const unconfirmedNote =
    activeCategory in UNCONFIRMED_CATEGORY_DESCRIPTIONS
      ? UNCONFIRMED_CATEGORY_DESCRIPTIONS[
          activeCategory as keyof typeof UNCONFIRMED_CATEGORY_DESCRIPTIONS
        ]
      : null;

  const handleQuickAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateNewMenuItemInput({
      name: newDishName,
      priceText: newDishPrice,
      category: activeCategory,
      description: newDishDesc,
    });
    if (!validation.valid) {
      setFormError(validation.error);
      return;
    }
    onAddCustomMenuItem(validation.item);
    setNewDishName('');
    setNewDishPrice('');
    setNewDishDesc('');
    setFormError(null);
    setShowAddForm(false);
  };

  return (
    <section
      id="menu"
      className="py-20 md:py-28 bg-[#FAF6F0] border-b border-[#163024]/10"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-[#7A3E24] mb-3">
              <span>Authentic Island Kitchen</span>
              <span aria-hidden="true">·</span>
              <span>All Prices in AUD</span>
            </div>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#163024] leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Our Menu
            </h2>
          </div>

          {/* Search & Quick Add Toggle */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#5B5E57] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${activeCategory}...`}
                aria-label="Search menu items"
                className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-[#163024]/20 rounded-lg text-[#1C1D1A] placeholder:text-[#6E716A] focus:outline-none focus:border-[#163024]"
              />
            </div>

            <button
              type="button"
              onClick={() => {
                setShowAddForm((prev) => !prev);
                setFormError(null);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#163024] bg-[#F3ECE1] hover:bg-[#E7DEC9] border border-[#163024]/15 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#7A3E24]" />
              <span>
                {showAddForm
                  ? 'Close Menu Editor'
                  : `Add / Edit ${activeCategory} Item`}
              </span>
            </button>
          </div>
        </div>

        {/* Category Navigation Tabs (9 Categories) */}
        <div
          role="tablist"
          aria-label="Menu Categories"
          className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-10 border-b border-[#163024]/12"
        >
          {MENU_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            const categoryCount = filterMenuByCategory(
              allMenuItems,
              category
            ).length;
            return (
              <button
                key={category}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => {
                  onSelectCategory(category);
                  setSearchQuery('');
                  setFormError(null);
                }}
                className={`px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#163024] text-[#FAF6F0] shadow-xs'
                    : 'text-[#3E413B] hover:text-[#163024] hover:bg-[#F3ECE1]'
                }`}
              >
                <span>{category}</span>
                {categoryCount > 0 && (
                  <span
                    className={`ml-1.5 font-mono-num text-xs ${
                      isActive ? 'text-[#DFB26F]' : 'text-[#7A3E24]'
                    }`}
                  >
                    {' '}({categoryCount})
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Optional Owner Inline Add Item Form */}
        {showAddForm && (
          <form
            onSubmit={handleQuickAddSubmit}
            className="mb-10 p-6 bg-[#F3ECE1] border border-[#163024]/15 rounded-xl"
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="font-display text-xl font-semibold text-[#163024]">
                  Owner Preview: Add Item to {activeCategory}
                </h3>
                <p className="text-xs text-[#4A4D46]">
                  Test adding confirmed dishes and AUD prices to the{' '}
                  <strong>{activeCategory}</strong> category.
                </p>
              </div>
            </div>

            {formError && (
              <p
                role="alert"
                className="mb-4 text-xs font-semibold text-[#9E2A2B] bg-[#9E2A2B]/10 px-3.5 py-2 rounded-md"
              >
                {formError}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              <div className="sm:col-span-5">
                <label
                  htmlFor="new-dish-name"
                  className="block text-xs font-semibold text-[#163024] mb-1"
                >
                  Dish Name
                </label>
                <input
                  id="new-dish-name"
                  type="text"
                  value={newDishName}
                  onChange={(e) => setNewDishName(e.target.value)}
                  placeholder={`e.g. Signature ${activeCategory} Dish`}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-[#163024]/20 rounded-md text-[#1C1D1A]"
                />
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="new-dish-price"
                  className="block text-xs font-semibold text-[#163024] mb-1"
                >
                  Price (AUD $)
                </label>
                <input
                  id="new-dish-price"
                  type="number"
                  step="0.10"
                  min="0"
                  value={newDishPrice}
                  onChange={(e) => setNewDishPrice(e.target.value)}
                  placeholder="24.90"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-[#163024]/20 rounded-md text-[#1C1D1A] font-mono-num"
                />
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="new-dish-desc"
                  className="block text-xs font-semibold text-[#163024] mb-1"
                >
                  Short Description
                </label>
                <input
                  id="new-dish-desc"
                  type="text"
                  value={newDishDesc}
                  onChange={(e) => setNewDishDesc(e.target.value)}
                  placeholder="Prepared fresh with Sri Lankan spices"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-[#163024]/20 rounded-md text-[#1C1D1A]"
                />
              </div>
            </div>

            <div className="mt-4 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setShowAddForm(false);
                  setFormError(null);
                }}
                className="px-4 py-2 text-xs font-medium text-[#3E413B] hover:text-[#163024] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-[#FAF6F0] bg-[#163024] hover:bg-[#214534] rounded-md transition-colors whitespace-nowrap cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add to {activeCategory}</span>
              </button>
            </div>
          </form>
        )}

        {/* Menu Items List or Editable Unconfirmed Category Placeholder */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="pb-6 border-b border-[#163024]/12 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#163024]">
                      {item.name}
                    </h3>
                    <span className="font-mono-num text-base sm:text-lg font-semibold text-[#7A3E24] whitespace-nowrap shrink-0">
                      {formatAudPrice(item.priceAud)}
                    </span>
                  </div>
                  <p className="text-sm text-[#3E413B] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Unboxed metadata line */}
                <div className="mt-3 flex items-center justify-between gap-4 text-xs text-[#656860]">
                  <div className="flex items-center gap-2">
                    <span>{item.category}</span>
                    {item.dietary && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#163024] font-medium">
                          {item.dietary}
                        </span>
                      </>
                    )}
                    <span aria-hidden="true">·</span>
                    <span>
                      {item.isVerified
                        ? 'Publicly listed price (AUD)'
                        : 'Custom preview item (AUD)'}
                    </span>
                  </div>

                  {!item.isVerified && (
                    <button
                      type="button"
                      onClick={() => onRemoveCustomMenuItem(item.id)}
                      aria-label={`Remove ${item.name}`}
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#9E2A2B] hover:underline cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 md:p-10 bg-[#F3ECE1] rounded-xl border border-[#163024]/12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#7A3E24] mb-2">
                <span>{activeCategory} Menu Category</span>
                <span aria-hidden="true">·</span>
                <span>Editable Owner Placeholder</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#163024] mb-2">
                {searchQuery
                  ? `No matching dishes found in ${activeCategory}`
                  : `${activeCategory} Selection — Awaiting Restaurant Confirmation`}
              </h3>
              <p className="text-sm text-[#3E413B] leading-relaxed">
                {searchQuery
                  ? `No dishes in ${activeCategory} matched "${searchQuery}". Try clearing your search or selecting another category.`
                  : unconfirmedNote ||
                    `Public menu items and prices for ${activeCategory} have not been invented. Use the button beside to add confirmed dishes or contact Cinnamon Edge directly for current availability.`}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setShowAddForm(true)}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#FAF6F0] bg-[#163024] hover:bg-[#214534] rounded-md transition-colors whitespace-nowrap cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add {activeCategory} Item</span>
              </button>
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#163024] bg-[#FAF6F0] hover:bg-white border border-[#163024]/20 rounded-md transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#7A3E24]" />
                <span>Call {phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}

        {/* Required Menu Disclaimer & Ordering Footer Bar */}
        <div className="mt-12 pt-8 border-t border-[#163024]/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-[#163024]">
              Menu items and prices may change. Please contact us for current
              availability.
            </p>
            <p className="text-xs text-[#5B5E57]">
              All prices are listed in Australian Dollars (AUD) and must be
              confirmed by the restaurant before the website is published.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={uberEatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wider text-[#12261D] bg-[#C89347] hover:bg-[#D8A559] rounded-md transition-colors whitespace-nowrap"
            >
              Order Online via Uber Eats
            </a>
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wider text-[#163024] border border-[#163024]/25 hover:border-[#163024] rounded-md transition-colors whitespace-nowrap"
            >
              Takeaway Enquiries: {phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
