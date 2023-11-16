// place files you want to import through the `$lib` alias in this folder.

export interface ChainInfo {
  name: string;
  data: ChainInfoUnit[];
}

export interface ChainInfoUnit {
  createdAt: {
    _seconds: 1697090400;
    _nanoseconds: 0;
  };
  unit: {
    chain: string;
    apr: number;
    block: {
      time: number;
      height: number;
      lastUpdated: number;
    };
    inflation: number;
    tokens: {
      bonded: number;
      supply: number;
      community: number;
    };
    validators: {
      active: number;
      jailed: number;
      total: number;
    };
    isTestnet: false;
    txs: number;
    tps: number;
    accounts: {
      monthly: number;
      total: number;
      beforeMontly: number;
    };
    updatedAt: number;
    market: {
      chain: 'archway';
      geckoId: 'archway';
      values: [
        number,
        number,
        null,
        null,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        null,
        null,
        number,
        string,
        number,
        string,
        number,
        number,
        number,
        number,
        number,
        null
      ];
      valuesBTC: [
        number,
        number,
        null,
        null,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        null,
        null,
        number,
        string,
        number,
        string,
        number,
        number,
        number,
        number,
        number,
        null
      ];
    };
  };
}
