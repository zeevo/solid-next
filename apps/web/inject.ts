import { container } from "@/container";
import { InjectionToken } from "tsyringe";

export function inject<T>(injectionToken: InjectionToken<T>) {
  return container.resolve<T>(injectionToken);
}
