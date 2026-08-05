import { cn } from "@/lib/utils";

interface DividerProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  fill?: string;
}

export function WaveDivider({ className, fill = "var(--background)", ...props }: DividerProps) {
  return (
    <div className={cn("absolute bottom-0 inset-x-0 w-full overflow-hidden leading-[0] z-10", className)}>
      <svg
        className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[100px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        {...props}
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function DiagonalCurve({ className, fill = "var(--background)", ...props }: DividerProps) {
  return (
    <div className={cn("absolute bottom-0 inset-x-0 w-full overflow-hidden leading-[0] z-10", className)}>
      <svg
        className="relative block w-[calc(100%+1.3px)] h-[50px] sm:h-[90px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        {...props}
      >
        <path
          d="M1200 120L0 16.48V0h1200v120z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function LayeredWave({ className, fill = "var(--background)", ...props }: DividerProps) {
  return (
    <div className={cn("absolute bottom-0 inset-x-0 w-full overflow-hidden leading-[0] z-10", className)}>
      <svg
        className="relative block w-[calc(100%+1.3px)] h-[70px] sm:h-[120px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        {...props}
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          fill={fill}
          opacity=".25"
        />
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          fill={fill}
          opacity=".5"
        />
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function SlantedDivider({ className, fill = "var(--background)", ...props }: DividerProps) {
  return (
    <div className={cn("absolute bottom-0 inset-x-0 w-full overflow-hidden leading-[0] z-10", className)}>
      <svg
        className="relative block w-[calc(100%+1.3px)] h-[40px] sm:h-[70px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        {...props}
      >
        <path
          d="M1200 120L0 16.48V120h1200z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function OrganicCurve({ className, fill = "var(--background)", ...props }: DividerProps) {
  return (
    <div className={cn("absolute bottom-0 inset-x-0 w-full overflow-hidden leading-[0] z-10", className)}>
      <svg
        className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[110px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        {...props}
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.22,34.46,120.35,53.28,193.38,62.83,236.4,68.4,279.74,64.21,321.39,56.44Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function InvertedWave({ className, fill = "var(--background)", ...props }: DividerProps) {
  return (
    <div className={cn("absolute top-0 inset-x-0 w-full overflow-hidden leading-[0] z-10 rotate-180", className)}>
      <svg
        className="relative block w-[calc(100%+1.3px)] h-[50px] sm:h-[80px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        {...props}
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function BlobDivider({ className, fill = "var(--background)", ...props }: DividerProps) {
  return (
    <div className={cn("absolute bottom-0 inset-x-0 w-full overflow-hidden leading-[0] z-10", className)}>
      <svg
        className="relative block w-[calc(100%+1.3px)] h-[70px] sm:h-[130px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        {...props}
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function AbstractCurve({ className, fill = "var(--background)", ...props }: DividerProps) {
  return (
    <div className={cn("absolute bottom-0 inset-x-0 w-full overflow-hidden leading-[0] z-10", className)}>
      <svg
        className="relative block w-[calc(100%+1.3px)] h-[60px] sm:h-[90px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        {...props}
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
