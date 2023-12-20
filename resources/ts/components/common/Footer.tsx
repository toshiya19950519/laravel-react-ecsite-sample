import { Typography } from "@material-tailwind/react";
 
export function Footer() {
  return (
    <footer className="border-t border-blue-gray-50 py-6 text-center">
        <Typography color="blue-gray" className="font-normal">
            &copy; 2023 Material Tailwind
        </Typography>
    </footer>
  );
}

export default Footer