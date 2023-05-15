import React, { memo, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Heading, Icon } from "@/components/atoms";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackBtn = useCallback(() => {
    navigate(`/`);
  }, [navigate]);

  return (
    <header className="bg-blue1 h-[64px] md:h-[84px] lg:h-[105px] flex items-center px-[20px] md:px-[90px] lg:px-[220px] mb-[43px]">
      {location.pathname !== "/" ? (
        <button className="block lg:hidden mr-[22px]" onClick={handleBackBtn}>
          <Icon name="chevron-left-white" className="w-[20px] h-[20px]" />
        </button>
      ) : null}

      <div data-cy="header-background">
        <Heading dataCy="header-title">TO DO LIST APP</Heading>
      </div>
    </header>
  );
};

export default memo(Index);
