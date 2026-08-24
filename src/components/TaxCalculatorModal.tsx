import React, { useState } from 'react';
import { Calculator, X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface TaxCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConsult: (details: string) => void;
}

export const TaxCalculatorModal: React.FC<TaxCalculatorModalProps> = ({ isOpen, onClose, onConsult }) => {
  const [calcType, setCalcType] = useState<'income' | 'gst'>('income');
  
  // Income tax state
  const [annualIncome, setAnnualIncome] = useState<number>(1200000);
  const [deductions80C, setDeductions80C] = useState<number>(150000);
  const [deductions80D, setDeductions80D] = useState<number>(25000);
  const [hraDeduction, setHraDeduction] = useState<number>(100000);

  // GST state
  const [taxableAmount, setTaxableAmount] = useState<number>(50000);
  const [gstRate, setGstRate] = useState<number>(18);

  if (!isOpen) return null;

  // Simple Old vs New Tax computation (FY 2025-26 approximation)
  // New Regime: 0-3L Nil, 3-7L 5%, 7-10L 10%, 10-12L 15%, 12-15L 20%, >15L 30% with standard deduction 75,000
  const computeNewRegimeTax = (income: number) => {
    const stdDeduction = 75000;
    const taxable = Math.max(0, income - stdDeduction);
    if (taxable <= 700000) return 0; // Section 87A rebate for income up to 7L taxable

    let tax = 0;
    if (taxable > 300000) {
      const slab1 = Math.min(taxable - 300000, 400000); // 3L to 7L (4L @ 5%)
      tax += slab1 * 0.05;
    }
    if (taxable > 700000) {
      const slab2 = Math.min(taxable - 700000, 300000); // 7L to 10L (3L @ 10%)
      tax += slab2 * 0.10;
    }
    if (taxable > 1000000) {
      const slab3 = Math.min(taxable - 1000000, 200000); // 10L to 12L (2L @ 15%)
      tax += slab3 * 0.15;
    }
    if (taxable > 1200000) {
      const slab4 = Math.min(taxable - 1200000, 300000); // 12L to 15L (3L @ 20%)
      tax += slab4 * 0.20;
    }
    if (taxable > 1500000) {
      const slab5 = taxable - 1500000; // Above 15L @ 30%
      tax += slab5 * 0.30;
    }
    return Math.round(tax * 1.04); // 4% cess
  };

  // Old Regime approximation: 50k standard deduction + 80C + 80D + HRA
  const computeOldRegimeTax = (income: number, d80C: number, d80D: number, hra: number) => {
    const totalDeductions = 50000 + Math.min(d80C, 150000) + Math.min(d80D, 100000) + hra;
    const taxable = Math.max(0, income - totalDeductions);
    if (taxable <= 500000) return 0; // 87A rebate

    let tax = 0;
    if (taxable > 250000) {
      const s1 = Math.min(taxable - 250000, 250000); // 2.5L to 5L @ 5%
      tax += s1 * 0.05;
    }
    if (taxable > 500000) {
      const s2 = Math.min(taxable - 500000, 500000); // 5L to 10L @ 20%
      tax += s2 * 0.20;
    }
    if (taxable > 1000000) {
      const s3 = taxable - 1000000; // Above 10L @ 30%
      tax += s3 * 0.30;
    }
    return Math.round(tax * 1.04);
  };

  const newTax = computeNewRegimeTax(annualIncome);
  const oldTax = computeOldRegimeTax(annualIncome, deductions80C, deductions80D, hraDeduction);
  const betterRegime = newTax < oldTax ? 'New Tax Regime' : 'Old Tax Regime';
  const taxSavings = Math.abs(newTax - oldTax);

  // GST Calculation
  const gstAmount = (taxableAmount * gstRate) / 100;
  const totalInvoice = taxableAmount + gstAmount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-2xl space-y-6 text-left max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-sm bg-blue-50 border border-blue-100 text-blue-600">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest font-bold">
                Interactive Advisory Tool
              </span>
              <h3 className="text-xl font-heading font-black text-slate-900 uppercase">
                Tax &amp; GST Quick Estimator
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-sm border border-slate-200">
          <button
            onClick={() => setCalcType('income')}
            className={`py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
              calcType === 'income'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Income Tax (Old vs New)
          </button>
          <button
            onClick={() => setCalcType('gst')}
            className={`py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
              calcType === 'gst'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            GST Quick Calculator
          </button>
        </div>

        {calcType === 'income' ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Gross Annual Income (₹)
                </label>
                <input
                  type="number"
                  step="50000"
                  value={annualIncome}
                  onChange={(e) => setAnnualIncome(Number(e.target.value) || 0)}
                  className="w-full px-3.5 py-2.5 rounded-sm bg-[#f8fafc] border border-slate-200 text-slate-900 text-sm focus:border-blue-600 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Section 80C Deductions (₹)
                </label>
                <input
                  type="number"
                  step="10000"
                  value={deductions80C}
                  onChange={(e) => setDeductions80C(Number(e.target.value) || 0)}
                  className="w-full px-3.5 py-2.5 rounded-sm bg-[#f8fafc] border border-slate-200 text-slate-900 text-sm focus:border-blue-600 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Section 80D Mediclaim (₹)
                </label>
                <input
                  type="number"
                  step="5000"
                  value={deductions80D}
                  onChange={(e) => setDeductions80D(Number(e.target.value) || 0)}
                  className="w-full px-3.5 py-2.5 rounded-sm bg-[#f8fafc] border border-slate-200 text-slate-900 text-sm focus:border-blue-600 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  HRA / Housing Exemption (₹)
                </label>
                <input
                  type="number"
                  step="10000"
                  value={hraDeduction}
                  onChange={(e) => setHraDeduction(Number(e.target.value) || 0)}
                  className="w-full px-3.5 py-2.5 rounded-sm bg-[#f8fafc] border border-slate-200 text-slate-900 text-sm focus:border-blue-600 focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            {/* Results Comparison Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className={`p-4 rounded-sm border ${betterRegime === 'New Tax Regime' ? 'bg-blue-50/60 border-blue-400' : 'bg-slate-50 border-slate-200'}`}>
                <span className="text-[10px] uppercase font-bold text-slate-600 tracking-wider block">
                  New Tax Regime (Default)
                </span>
                <div className="text-2xl font-heading font-black text-slate-900 mt-1">
                  ₹{newTax.toLocaleString('en-IN')}
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  ₹75,000 standard deduction applied.
                </p>
              </div>

              <div className={`p-4 rounded-sm border ${betterRegime === 'Old Tax Regime' ? 'bg-blue-50/60 border-blue-400' : 'bg-slate-50 border-slate-200'}`}>
                <span className="text-[10px] uppercase font-bold text-slate-600 tracking-wider block">
                  Old Tax Regime (With Deductions)
                </span>
                <div className="text-2xl font-heading font-black text-slate-900 mt-1">
                  ₹{oldTax.toLocaleString('en-IN')}
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Includes ₹50k std ded + 80C/80D/HRA.
                </p>
              </div>
            </div>

            {/* Recommendation badge */}
            <div className="p-3.5 rounded-sm bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs text-emerald-900">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Recommended: <strong>{betterRegime}</strong></span>
              </div>
              <span className="font-mono font-bold text-emerald-700">Saves ₹{taxSavings.toLocaleString('en-IN')}</span>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Taxable Value (₹)
                </label>
                <input
                  type="number"
                  step="1000"
                  value={taxableAmount}
                  onChange={(e) => setTaxableAmount(Number(e.target.value) || 0)}
                  className="w-full px-3.5 py-2.5 rounded-sm bg-[#f8fafc] border border-slate-200 text-slate-900 text-sm focus:border-blue-600 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  GST Slab Rate
                </label>
                <select
                  value={gstRate}
                  onChange={(e) => setGstRate(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-sm bg-[#f8fafc] border border-slate-200 text-slate-900 text-sm focus:border-blue-600 focus:bg-white focus:outline-none cursor-pointer"
                >
                  <option value={5}>5% (Essential Commodities/Services)</option>
                  <option value={12}>12% (Standard Category)</option>
                  <option value={18}>18% (Commercial/Professional Services)</option>
                  <option value={28}>28% (Luxury/Special Goods)</option>
                </select>
              </div>
            </div>

            {/* GST Output Breakdown */}
            <div className="p-4 rounded-sm bg-slate-50 border border-slate-200 space-y-2.5">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>CGST ({gstRate / 2}%):</span>
                <span className="font-mono text-slate-900 font-semibold">₹{(gstAmount / 2).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span>SGST ({gstRate / 2}%):</span>
                <span className="font-mono text-slate-900 font-semibold">₹{(gstAmount / 2).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-900 border-t border-slate-200 pt-2 font-bold">
                <span>Total GST Component ({gstRate}%):</span>
                <span className="font-mono text-blue-600 font-bold">₹{gstAmount.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-900 border-t border-slate-200 pt-2 font-black">
                <span>Gross Invoice Total:</span>
                <span className="font-mono text-lg text-blue-700">₹{totalInvoice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-slate-500 text-center sm:text-left">
            Estimates for general guidance. Consult Saumya Sur for exact statutory filings.
          </span>
          <button
            onClick={() => {
              onClose();
              onConsult(`Inquiry regarding ${calcType === 'income' ? 'Income Tax Regime Optimization' : 'GST Invoice & Compliance Calculation'}`);
            }}
            className="w-full sm:w-auto px-5 py-2 rounded-sm bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider shadow-xs cursor-pointer"
          >
            Consult Saumya Sur
          </button>
        </div>

      </div>
    </div>
  );
};
