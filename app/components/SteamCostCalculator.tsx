import React, { useState } from "react";

interface Tax {
  name: string;
  rate: number; // porcentaje
  entity: string;
}

const TAXES: Tax[] = [
  { name: "IVA servicios digitales", rate: 21, entity: "Nacional (AFIP)" },
  { name: "Percepción Ganancias/Bienes Personales", rate: 0, entity: "Nacional (AFIP)" },
  { name: "Ingresos Brutos", rate: 2, entity: "Provincial" },
  { name: "Cargo bancario / comisión", rate: 0, entity: "Entidad privada" }, // ajustable
];

const DOLAR_VENTA = 1475; // Pesos por USD, oficial

const SteamCostCalculator: React.FC = () => {
  const [usd, setUsd] = useState<number>(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (isNaN(value)) return;
    if (value >= 0) {
      setUsd(value);
    }
  };

  const calculateTaxAmount = (tax: Tax) => (usd * DOLAR_VENTA * tax.rate) / 100;

  const total = TAXES.reduce(
    (sum, tax) => sum + calculateTaxAmount(tax),
    usd * DOLAR_VENTA
  );

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Calculadora de costos Steam (ARS)</h2>
      <div className="mb-4">
        <label className="mr-2 font-medium">Monto en USD:</label>
        <input
          type="number"
          value={(usd)?usd:""}
          onChange={handleChange}
          className="border rounded px-2 py-1 w-24"
          min={0}
        />
      </div>

      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="">
            <th className="border border-gray-300 dark:border-black px-2 py-1">Concepto</th>
            <th className="border border-gray-300 dark:border-black px-2 py-1">% aplicado</th>
            <th className="border border-gray-300 dark:border-black px-2 py-1">Monto (ARS)</th>
            <th className="border border-gray-300 dark:border-black px-2 py-1">Jurisdicción / Entidad</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="border border-gray-300 dark:border-black px-2 py-1">Base (USD {usd})</td>
            <td className="border border-gray-300 dark:border-black px-2 py-1">—</td>
            <td className="border border-gray-300 dark:border-black px-2 py-1">{(usd * DOLAR_VENTA).toFixed(2)}</td>
            <td className="border border-gray-300 dark:border-black px-2 py-1">—</td>
          </tr>
          {TAXES.map((tax) => (
            <tr key={tax.name} className="">
              <td className="border border-gray-300 dark:border-black px-2 py-1">{tax.name}</td>
              <td className="border border-gray-300 dark:border-black px-2 py-1">{tax.rate}%</td>
              <td className="border border-gray-300 dark:border-black px-2 py-1">
                {calculateTaxAmount(tax).toFixed(2)}
              </td>
              <td className="border border-gray-300 dark:border-black px-2 py-1">{tax.entity}</td>
            </tr>
          ))}
          <tr className=" font-bold">
            <td className="border border-gray-300 dark:border-black px-2 py-1">Total</td>
            <td className="border border-gray-300 dark:border-black px-2 py-1">—</td>
            <td className="border border-gray-300 dark:border-black px-2 py-1">{total.toFixed(2)}</td>
            <td className="border border-gray-300 dark:border-black px-2 py-1">—</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SteamCostCalculator;
