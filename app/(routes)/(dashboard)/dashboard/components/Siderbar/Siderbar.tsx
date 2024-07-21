import { LogoDashboard } from "../LogoDashboard";
import { SiderbarRoutes } from "../SiderbarRoutes";

export function Siderbar() {
  return (
    <div className="h-screen">
      <div className="flex flex-col h-full border-r ">
        <LogoDashboard />
        <SiderbarRoutes />
      </div>
    </div>
  );
}
