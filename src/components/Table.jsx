import React from "react";

const Table = ({ table, boldFirst }) => (
  <div className="mt-4 max-w-full min-w-0">
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-base leading-6 font-semibold text-white">
          {table.title}
        </h1>
        <p className="mt-2 text-sm text-gray-300">{table.subtitle}</p>
      </div>
    </div>
    <div className="bg-background/35 mt-4 overflow-hidden rounded-xl border border-white/15 shadow-sm backdrop-blur-sm">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div>
            <table className="min-w-full divide-y divide-white/10">
              <thead className="bg-white/5">
                <tr>
                  {table.headers.map((h, i) =>
                    i !== 0 ? (
                      <th
                        key={`${table.title}-${h}`}
                        scope="col"
                        className="text-highlight px-3 py-3 text-left text-xs font-semibold whitespace-nowrap sm:py-3.5 sm:text-sm"
                      >
                        {h}
                      </th>
                    ) : (
                      <th
                        key={`${table.title}-${h}`}
                        scope="col"
                        className="text-highlight py-3 pr-6 pl-3 text-left text-xs font-semibold whitespace-nowrap sm:py-3.5 sm:pr-10 sm:pl-4 sm:text-sm"
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {table.data.map((d) => (
                  <tr key={d[0]}>
                    {d.map((val, i) =>
                      i !== 0 ? (
                        <td
                          key={val}
                          className="px-3 py-3 text-sm text-gray-300 sm:py-4"
                        >
                          {val}
                        </td>
                      ) : (
                        <td
                          key={val}
                          className={
                            boldFirst
                              ? "py-3 pr-3 pl-3 text-sm font-bold text-white sm:py-4 sm:pl-4"
                              : "py-3 pr-3 pl-3 text-sm text-gray-300 sm:py-4 sm:pl-4"
                          }
                        >
                          {val}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Table;
