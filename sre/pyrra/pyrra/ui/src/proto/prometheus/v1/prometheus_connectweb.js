// @generated by protoc-gen-connect-web v0.8.1 with parameter "target=js+dts"
// @generated from file prometheus/v1/prometheus.proto (package prometheus.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryRangeRequest, QueryRangeResponse, QueryRequest, QueryResponse } from "./prometheus_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service prometheus.v1.PrometheusService
 */
export const PrometheusService = {
  typeName: "prometheus.v1.PrometheusService",
  methods: {
    /**
     * @generated from rpc prometheus.v1.PrometheusService.Query
     */
    query: {
      name: "Query",
      I: QueryRequest,
      O: QueryResponse,
      kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc prometheus.v1.PrometheusService.QueryRange
     */
    queryRange: {
      name: "QueryRange",
      I: QueryRangeRequest,
      O: QueryRangeResponse,
      kind: MethodKind.Unary,
    },
  }
};

