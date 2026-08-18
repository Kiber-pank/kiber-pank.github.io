
window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "openapi": "3.0.3",
    "info": {
      "title": "ComplyMap API",
      "version": "1.0.0",
      "description": "REST API реестров документов. Курсорная пагинация, динамические фильтры, проекция полей."
    },
    "servers": [
      {
        "url": "http://localhost:3000"
      }
    ],
    "tags": [
      {
        "name": "docs",
        "description": "Реестры документов"
      }
    ],
    "security": [
      {
        "ApiKeyAuth": []
      }
    ],
    "components": {
      "securitySchemes": {
        "ApiKeyAuth": {
          "type": "apiKey",
          "in": "header",
          "name": "X-API-Key",
          "description": "Введите ваш API ключ для доступа к данным"
        }
      }
    },
    "paths": {
      "/api/v1/declarations": {
        "get": {
          "tags": [
            "docs"
          ],
          "summary": "Список деклараций",
          "parameters": [
            {
              "name": "cursor",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: cursor"
            },
            {
              "name": "requests_limit",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: requests_limit"
            },
            {
              "name": "sort",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: sort"
            },
            {
              "name": "direction",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: direction"
            },
            {
              "name": "status_id",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: status_id"
            },
            {
              "name": "applicant_inn",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: applicant_inn"
            },
            {
              "name": "manufacturer_inn",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: manufacturer_inn"
            },
            {
              "name": "doc_number",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: doc_number"
            },
            {
              "name": "sync_status",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: sync_status"
            },
            {
              "name": "doc_type_id",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: doc_type_id"
            },
            {
              "name": "product_origin_id",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: product_origin_id"
            },
            {
              "name": "applicant_type_id",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: applicant_type_id"
            },
            {
              "name": "reg_date_from",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: reg_date_from"
            },
            {
              "name": "reg_date_to",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: reg_date_to"
            },
            {
              "name": "tnved_ids",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: tnved_ids"
            },
            {
              "name": "tech_reg_ids",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: tech_reg_ids"
            },
            {
              "name": "groups_id",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: groups_id"
            },
            {
              "name": "single_list_ids",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: single_list_ids"
            },
            {
              "name": "fields",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: fields"
            }
          ],
          "responses": {
            "200": {
              "description": "Список с курсором"
            },
            "400": {
              "description": "ValidationError"
            },
            "401": {
              "description": "Unauthorized"
            },
            "429": {
              "description": "QuotaExceeded"
            }
          }
        }
      },
      "/api/v1/certificates": {
        "get": {
          "tags": [
            "docs"
          ],
          "summary": "Список сертификатов",
          "parameters": [
            {
              "name": "cursor",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: cursor"
            },
            {
              "name": "requests_limit",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: requests_limit"
            },
            {
              "name": "sort",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: sort"
            },
            {
              "name": "direction",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: direction"
            },
            {
              "name": "status_id",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: status_id"
            },
            {
              "name": "applicant_inn",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: applicant_inn"
            },
            {
              "name": "manufacturer_inn",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: manufacturer_inn"
            },
            {
              "name": "doc_number",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: doc_number"
            },
            {
              "name": "sync_status",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: sync_status"
            },
            {
              "name": "doc_type_id",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: doc_type_id"
            },
            {
              "name": "product_origin_id",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: product_origin_id"
            },
            {
              "name": "applicant_type_id",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: applicant_type_id"
            },
            {
              "name": "reg_date_from",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: reg_date_from"
            },
            {
              "name": "reg_date_to",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: reg_date_to"
            },
            {
              "name": "tnved_ids",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: tnved_ids"
            },
            {
              "name": "tech_reg_ids",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: tech_reg_ids"
            },
            {
              "name": "groups_id",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: groups_id"
            },
            {
              "name": "single_list_ids",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: single_list_ids"
            },
            {
              "name": "fields",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Параметр: fields"
            }
          ],
          "responses": {
            "200": {
              "description": "Список с курсором"
            },
            "400": {
              "description": "ValidationError"
            },
            "401": {
              "description": "Unauthorized"
            },
            "429": {
              "description": "QuotaExceeded"
            }
          }
        }
      },
      "/api/v1/declarations/detail": {
        "get": {
          "tags": [
            "docs"
          ],
          "summary": "Детальная карточка декларации",
          "parameters": [
            {
              "name": "card_id",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Уникальный ID документа (card_id ИЛИ doc_number)"
            },
            {
              "name": "doc_number",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Номер документа (card_id ИЛИ doc_number)"
            }
          ],
          "responses": {
            "200": {
              "description": "Полный объект документа"
            },
            "400": {
              "description": "ValidationError"
            },
            "401": {
              "description": "Unauthorized"
            },
            "404": {
              "description": "DocumentNotFound"
            }
          }
        }
      },
      "/api/v1/certificates/detail": {
        "get": {
          "tags": [
            "docs"
          ],
          "summary": "Детальная карточка сертификата",
          "parameters": [
            {
              "name": "card_id",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Уникальный ID документа (card_id ИЛИ doc_number)"
            },
            {
              "name": "doc_number",
              "in": "query",
              "required": false,
              "schema": {
                "type": "string"
              },
              "description": "Номер документа (card_id ИЛИ doc_number)"
            }
          ],
          "responses": {
            "200": {
              "description": "Полный объект документа"
            },
            "400": {
              "description": "ValidationError"
            },
            "401": {
              "description": "Unauthorized"
            },
            "404": {
              "description": "DocumentNotFound"
            }
          }
        }
      }
    }
  },
  "customOptions": {
    "docExpansion": "list"
  }
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.preauthorizeApiKey) {
    const key = customOptions.preauthorizeApiKey.authDefinitionKey;
    const value = customOptions.preauthorizeApiKey.apiKeyValue;
    if (!!key && !!value) {
      const pid = setInterval(() => {
        const authorized = ui.preauthorizeApiKey(key, value);
        if(!!authorized) clearInterval(pid);
      }, 500)

    }
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
